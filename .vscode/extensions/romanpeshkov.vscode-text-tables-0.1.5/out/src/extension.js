'use strict';
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
const utils = require("./utils");
const cmd = require("./commands");
const ttOrg_1 = require("./ttOrg");
const ttMarkdown_1 = require("./ttMarkdown");
const util_1 = require("util");
const context_1 = require("./context");
const cfg = require("./configuration");
let locator;
let parser;
let stringifier;
let configuration;
function loadConfiguration() {
    configuration = cfg.build();
    if (configuration.mode === cfg.Mode.Org) {
        locator = new ttOrg_1.OrgLocator();
        parser = new ttOrg_1.OrgParser();
        stringifier = new ttOrg_1.OrgStringifier();
    }
    else {
        locator = new ttMarkdown_1.MarkdownLocator();
        parser = new ttMarkdown_1.MarkdownParser();
        stringifier = new ttMarkdown_1.MarkdownStringifier();
    }
}
function activate(ctx) {
    loadConfiguration();
    const statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    context_1.registerContext(context_1.ContextType.TableMode, '$(book) Table Mode', statusItem);
    if (configuration.showStatus) {
        statusItem.show();
    }
    vscode.workspace.onDidChangeConfiguration(() => {
        loadConfiguration();
        if (configuration.showStatus) {
            statusItem.show();
        }
        else {
            statusItem.hide();
        }
    });
    vscode.window.onDidChangeActiveTextEditor(e => {
        if (e) {
            context_1.restoreContext(e);
        }
    });
    ctx.subscriptions.push(vscode.commands.registerCommand('text-tables.enable', () => {
        vscode.window.showInformationMessage('Text tables enabled!');
    }));
    ctx.subscriptions.push(vscode.commands.registerTextEditorCommand('text-tables.tableModeOn', (e) => context_1.enterContext(e, context_1.ContextType.TableMode)));
    ctx.subscriptions.push(vscode.commands.registerTextEditorCommand('text-tables.tableModeOff', (e) => context_1.exitContext(e, context_1.ContextType.TableMode)));
    ctx.subscriptions.push(registerTableCommand('text-tables.moveRowDown', cmd.moveRowDown, { format: true }));
    ctx.subscriptions.push(registerTableCommand('text-tables.moveRowUp', cmd.moveRowUp, { format: true }));
    ctx.subscriptions.push(registerTableCommand('text-tables.moveColRight', (editor, e, range, table) => {
        cmd.moveColRight(editor, e, range, table, stringifier);
    }));
    ctx.subscriptions.push(registerTableCommand('text-tables.moveColLeft', (editor, e, range, table) => {
        cmd.moveColLeft(editor, e, range, table, stringifier);
    }));
    ctx.subscriptions.push(vscode.commands.registerTextEditorCommand('text-tables.clearCell', (e, ed) => cmd.clearCell(e, ed, parser)));
    ctx.subscriptions.push(vscode.commands.registerCommand('text-tables.gotoNextCell', () => __awaiter(this, void 0, void 0, function* () {
        // TODO: Refactor this by reimplementing registerTableCommand function
        // Internally registerTableCommand uses registerTextEditorCommand which doesn't allow to apply multiple edits
        // from different places.
        const editor = vscode.window.activeTextEditor;
        if (util_1.isUndefined(editor)) {
            return;
        }
        const tableRange = locator.locate(editor.document, editor.selection.start.line);
        if (util_1.isUndefined(tableRange)) {
            return;
        }
        const selectedText = editor.document.getText(tableRange);
        const table = parser.parse(selectedText);
        if (util_1.isUndefined(table)) {
            return;
        }
        table.startLine = tableRange.start.line;
        yield cmd.gotoNextCell(editor, tableRange, table, stringifier);
    })));
    // ctx.subscriptions.push(registerTableCommand('text-tables.gotoNextCell', (editor, e, range, table) => {
    //     cmd.gotoNextCell(editor, e, range, table, stringifier);
    // }));
    ctx.subscriptions.push(registerTableCommand('text-tables.gotoPreviousCell', cmd.gotoPreviousCell, { format: true }));
    ctx.subscriptions.push(registerTableCommand('text-tables.nextRow', (editor, e, range, table) => {
        cmd.nextRow(editor, e, range, table, stringifier);
    }));
    // Format table under cursor
    ctx.subscriptions.push(registerTableCommand('text-tables.formatUnderCursor', (editor, e, range, table) => cmd.formatUnderCursor(editor, e, range, table, stringifier)));
    ctx.subscriptions.push(vscode.commands.registerTextEditorCommand('text-tables.createTable', editor => {
        const opts = {
            value: '5x2',
            prompt: 'Table size Columns x Rows (e.g. 5x2)',
            validateInput: (value) => {
                if (!utils.tableSizeRe.test(value)) {
                    return 'Provided value is invalid. Please provide the value in format Columns x Rows (e.g. 5x2)';
                }
                return;
            }
        };
        vscode.window.showInputBox(opts).then(x => {
            if (!x) {
                return;
            }
            const match = x.match(utils.tableSizeRe);
            if (match) {
                const cols = +match[1] || 1;
                const rows = +match[2] || 2;
                cmd.createTable(rows, cols, editor, configuration, stringifier);
            }
        });
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
function registerTableCommand(command, callback, options) {
    return vscode.commands.registerTextEditorCommand(command, (editor, e) => __awaiter(this, void 0, void 0, function* () {
        const tableRange = locator.locate(editor.document, editor.selection.start.line);
        if (util_1.isUndefined(tableRange)) {
            return;
        }
        const selectedText = editor.document.getText(tableRange);
        const table = parser.parse(selectedText);
        if (util_1.isUndefined(table)) {
            return;
        }
        table.startLine = tableRange.start.line;
        if (options && options.format) {
            cmd.formatUnderCursor(editor, e, tableRange, table, stringifier).then(() => callback(editor, e, tableRange, table));
        }
        else {
            callback(editor, e, tableRange, table);
        }
    }));
}
//# sourceMappingURL=extension.js.map