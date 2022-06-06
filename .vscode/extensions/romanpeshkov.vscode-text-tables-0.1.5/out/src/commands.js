"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const cfg = require("./configuration");
const ttTable_1 = require("./ttTable");
/**
 * Create new table with specified rows and columns count in position of cursor
 */
function createTable(rowsCount, colsCount, editor, configuration, stringifier) {
    const table = new ttTable_1.Table();
    for (let i = 0; i < rowsCount + 1; i++) {
        table.addRow(ttTable_1.RowType.Data, new Array(colsCount).fill(''));
    }
    table.rows[1].type = ttTable_1.RowType.Separator;
    // TODO: Refactor this!
    if (configuration.mode === cfg.Mode.Markdown) {
        table.cols.forEach(c => c.width = 3);
    }
    return new Promise(resolve => {
        const currentPosition = editor.selection.start;
        editor
            .edit(b => b.insert(currentPosition, stringifier.stringify(table)))
            .then(() => {
            editor.selection = new vscode.Selection(currentPosition, currentPosition);
            resolve();
        });
    });
}
exports.createTable = createTable;
/**
 * Swap row under cursor with row below
 */
function moveRowDown(editor, _e, _range, table) {
    const rowNum = editor.selection.end.line - table.startLine;
    if (rowNum >= table.rows.length - 1) {
        vscode.window.showWarningMessage('Cannot move row further');
        return;
    }
    vscode.commands.executeCommand('editor.action.moveLinesDownAction');
}
exports.moveRowDown = moveRowDown;
/**
 * Swap row under cursor with row above
 */
function moveRowUp(editor, _e, _range, table) {
    const rowNum = editor.selection.start.line - table.startLine;
    if (rowNum <= 0) {
        vscode.window.showWarningMessage('Cannot move row further');
        return;
    }
    vscode.commands.executeCommand('editor.action.moveLinesUpAction');
}
exports.moveRowUp = moveRowUp;
/**
 * Move cursor to the next cell of table
 */
function gotoNextCell(editor, _range, table, stringifier) {
    return __awaiter(this, void 0, void 0, function* () {
        const nav = new ttTable_1.TableNavigator(table);
        const newPos = nav.nextCell(editor.selection.start);
        if (newPos) {
            yield editor.edit(e => formatUnderCursor(editor, e, _range, table, stringifier));
            editor.selection = new vscode.Selection(newPos, newPos);
        }
        else {
            table.addRow(ttTable_1.RowType.Data, new Array(table.cols.length).fill(''));
            yield gotoNextCell(editor, _range, table, stringifier);
        }
    });
}
exports.gotoNextCell = gotoNextCell;
/**
 * Move cursor to the previous cell of table
 */
function gotoPreviousCell(editor, _e, _range, table) {
    const nav = new ttTable_1.TableNavigator(table);
    const newPos = nav.previousCell(editor.selection.start);
    if (newPos) {
        editor.selection = new vscode.Selection(newPos, newPos);
    }
}
exports.gotoPreviousCell = gotoPreviousCell;
/**
 * Format table under cursor
 */
function formatUnderCursor(editor, e, range, table, stringifier) {
    return __awaiter(this, void 0, void 0, function* () {
        const newText = stringifier.stringify(table);
        const prevSel = editor.selection.start;
        e.replace(range, newText);
        editor.selection = new vscode.Selection(prevSel, prevSel);
    });
}
exports.formatUnderCursor = formatUnderCursor;
/**
 * Swap column under cursor with column on the right
 */
function moveColRight(editor, e, range, table, stringifier) {
    return __awaiter(this, void 0, void 0, function* () {
        const rowCol = rowColFromPosition(table, editor.selection.start);
        if (rowCol.col < 0) {
            vscode.window.showWarningMessage('Not in table data field');
            return;
        }
        if (rowCol.col >= table.cols.length - 1) {
            vscode.window.showWarningMessage('Cannot move column further right');
            return;
        }
        [table.cols[rowCol.col], table.cols[rowCol.col + 1]] = [table.cols[rowCol.col + 1], table.cols[rowCol.col]];
        table.rows.forEach((_, i) => {
            const v1 = table.getAt(i, rowCol.col);
            const v2 = table.getAt(i, rowCol.col + 1);
            table.setAt(i, rowCol.col + 1, v1);
            table.setAt(i, rowCol.col, v2);
        });
        const newText = stringifier.stringify(table);
        e.replace(range, newText);
        yield gotoNextCell(editor, range, table, stringifier);
    });
}
exports.moveColRight = moveColRight;
/**
 * Swap column under cursor with column on the left
 */
function moveColLeft(editor, e, range, table, stringifier) {
    return __awaiter(this, void 0, void 0, function* () {
        const rowCol = rowColFromPosition(table, editor.selection.start);
        if (rowCol.col < 0) {
            vscode.window.showWarningMessage('Not in table data field');
            return;
        }
        if (rowCol.col === 0) {
            vscode.window.showWarningMessage('Cannot move column further left');
            return;
        }
        [table.cols[rowCol.col], table.cols[rowCol.col - 1]] = [table.cols[rowCol.col - 1], table.cols[rowCol.col]];
        table.rows.forEach((_, i) => {
            const v1 = table.getAt(i, rowCol.col);
            const v2 = table.getAt(i, rowCol.col - 1);
            table.setAt(i, rowCol.col - 1, v1);
            table.setAt(i, rowCol.col, v2);
        });
        const newText = stringifier.stringify(table);
        e.replace(range, newText);
        yield gotoPreviousCell(editor, e, range, table);
    });
}
exports.moveColLeft = moveColLeft;
/**
 * Clear cell under cursor
 */
function clearCell(editor, edit, parser) {
    const document = editor.document;
    const currentLineNumber = editor.selection.start.line;
    const currentLine = document.lineAt(currentLineNumber);
    if (parser.isSeparatorRow(currentLine.text)) {
        vscode.window.showInformationMessage('Not in table data field');
        return;
    }
    const leftSepPosition = currentLine.text.lastIndexOf('|', editor.selection.start.character - 1);
    let rightSepPosition = currentLine.text.indexOf('|', editor.selection.start.character);
    if (rightSepPosition < 0) {
        rightSepPosition = currentLine.range.end.character;
    }
    if (leftSepPosition === rightSepPosition) {
        vscode.window.showInformationMessage('Not in table data field');
        return;
    }
    const r = new vscode.Range(currentLineNumber, leftSepPosition + 1, currentLineNumber, rightSepPosition);
    edit.replace(r, ' '.repeat(rightSepPosition - leftSepPosition - 1));
    const newPos = new vscode.Position(currentLineNumber, leftSepPosition + 2);
    editor.selection = new vscode.Selection(newPos, newPos);
}
exports.clearCell = clearCell;
/**
 * Moves cursor to the next row. If cursor is in the last row of table, create new row
 */
function nextRow(editor, _e, range, table, stringifier) {
    const inLastRow = range.end.line === editor.selection.start.line;
    if (inLastRow) {
        table.addRow(ttTable_1.RowType.Data, new Array(table.cols.length).fill(''));
    }
    // Editing by "_e" messes cursor position. Looks like edits are applied once the command is finished,
    // but it's too late
    editor.edit(b => b.replace(range, stringifier.stringify(table)))
        .then(() => {
        const nav = new ttTable_1.TableNavigator(table);
        const nextRowPos = nav.nextRow(editor.selection.start);
        if (nextRowPos) {
            editor.selection = new vscode.Selection(nextRowPos, nextRowPos);
        }
    });
}
exports.nextRow = nextRow;
function rowColFromPosition(table, position) {
    const result = { row: -1, col: -1 };
    result.row = position.line - table.startLine;
    let counter = 1;
    for (let i = 0; i < table.cols.length; ++i) {
        const col = table.cols[i];
        if (position.character >= counter && position.character < counter + col.width + 3) {
            result.col = i;
            break;
        }
        counter += col.width + 3;
    }
    return result;
}
//# sourceMappingURL=commands.js.map