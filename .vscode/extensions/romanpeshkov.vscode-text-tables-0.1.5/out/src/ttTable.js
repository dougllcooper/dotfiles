"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
var RowType;
(function (RowType) {
    RowType[RowType["Unknown"] = 0] = "Unknown";
    RowType[RowType["Separator"] = 1] = "Separator";
    RowType[RowType["Data"] = 2] = "Data";
})(RowType = exports.RowType || (exports.RowType = {}));
var Alignment;
(function (Alignment) {
    Alignment[Alignment["Left"] = 0] = "Left";
    Alignment[Alignment["Center"] = 1] = "Center";
    Alignment[Alignment["Right"] = 2] = "Right";
})(Alignment = exports.Alignment || (exports.Alignment = {}));
class Table {
    constructor() {
        /**
         * Line where the table starts
         */
        this.startLine = 0;
        this.rows = [];
        this.cols = [];
        this.data = [];
    }
    addRow(type, values) {
        let adjustCount = values.length - this.cols.length;
        while (adjustCount-- > 0) {
            this.cols.push({ alignment: Alignment.Left, width: 0 });
        }
        for (const row of this.data) {
            const adjustee = row.length < values.length ? row : values;
            adjustCount = Math.abs(row.length - values.length);
            while (adjustCount-- > 0) {
                adjustee.push('');
            }
        }
        this.cols.forEach((col, i) => col.width = Math.max(col.width, values[i].length));
        this.rows.push({ type });
        this.data.push(values);
    }
    getAt(row, col) {
        return this.data[row][col];
    }
    getRow(row) {
        return this.data[row];
    }
    setAt(row, col, value) {
        if (this.cols[col].width < value.length) {
            this.cols[col].width = value.length;
        }
        this.data[row][col] = value;
    }
}
exports.Table = Table;
class JumpPosition {
    constructor(start, end, isSeparator, prev) {
        this.isSeparator = isSeparator;
        this.range = new vscode.Range(start, end);
        if (prev) {
            prev.next = this;
            this.prev = prev;
        }
    }
}
class TableNavigator {
    constructor(table) {
        this.table = table;
        this.jumpPositions = [];
        this.jumpPositions = this.buildJumpPositions();
    }
    nextCell(cursorPosition) {
        return this.jump(cursorPosition, x => x.next);
    }
    previousCell(cursorPosition) {
        return this.jump(cursorPosition, x => x.prev);
    }
    nextRow(cursorPosition) {
        const nextRowJump = this.jumpPositions.find(x => x.range.contains(cursorPosition.translate(1)));
        if (!nextRowJump) {
            return undefined;
        }
        return nextRowJump.range.start.translate(0, 1);
    }
    jump(currentPosition, accessor) {
        let jmp = this.jumpPositions.find(x => x.range.contains(currentPosition));
        if (jmp) {
            jmp = accessor(jmp);
            if (jmp) {
                if (jmp.isSeparator) {
                    if (!accessor(jmp)) {
                        return undefined;
                    }
                    jmp = accessor(jmp);
                }
                return jmp.range.start.translate(0, 1);
            }
        }
        // Maybe we're just outside left part of table? Let's move cursor a bit...
        if (currentPosition.character === 0) {
            return currentPosition.translate(0, 2);
        }
        else {
            return undefined;
        }
    }
    buildJumpPositions() {
        const result = [];
        const cellPadding = 2;
        let lastAnchor = 0;
        const anchors = this.table.cols.reduce((accum, col) => {
            lastAnchor += col.width + cellPadding + 1;
            accum.push(lastAnchor);
            return accum;
        }, [lastAnchor]);
        // extend last point to "infinity"
        anchors[anchors.length - 1] = 999;
        for (let i = 0; i < this.table.rows.length; ++i) {
            const row = this.table.rows[i];
            const rowLine = this.table.startLine + i;
            if (row.type === RowType.Separator) {
                const prevJmpPos = result[result.length - 1];
                // Extend last range to whole separator line or start from beginning of line
                const start = prevJmpPos
                    ? prevJmpPos.range.end
                    : new vscode.Position(rowLine, 0);
                const end = start.translate(1);
                const jmpPos = new JumpPosition(start, end, true, prevJmpPos);
                result.push(jmpPos);
            }
            else {
                for (let j = 0; j < anchors.length - 1; ++j) {
                    const prevJmpPos = result[result.length - 1];
                    const start = new vscode.Position(rowLine, anchors[j] + 1);
                    const end = new vscode.Position(rowLine, anchors[j + 1]);
                    const jmpPos = new JumpPosition(start, end, false, prevJmpPos);
                    result.push(jmpPos);
                }
            }
        }
        return result;
    }
}
exports.TableNavigator = TableNavigator;
//# sourceMappingURL=ttTable.js.map