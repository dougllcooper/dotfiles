"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
var ContextType;
(function (ContextType) {
    ContextType["TableMode"] = "tableMode";
})(ContextType = exports.ContextType || (exports.ContextType = {}));
const contexts = new Map();
const state = new Map();
function registerContext(type, title, statusItem) {
    const ctx = new Context(type, title, statusItem);
    contexts.set(type, ctx);
    ctx.setState(false);
}
exports.registerContext = registerContext;
function enterContext(editor, type) {
    const ctx = contexts.get(type);
    if (ctx) {
        ctx.setState(true);
        const editorState = state.get(editor.document.fileName) || [];
        state.set(editor.document.fileName, editorState.concat(type));
    }
}
exports.enterContext = enterContext;
function exitContext(editor, type) {
    const ctx = contexts.get(type);
    if (ctx) {
        ctx.setState(false);
        const editorState = state.get(editor.document.fileName) || [];
        state.set(editor.document.fileName, editorState.filter(x => x !== type));
    }
}
exports.exitContext = exitContext;
function restoreContext(editor) {
    let toEnter = [];
    let toExit = Object.keys(ContextType).map((x) => ContextType[x]);
    if (state.has(editor.document.fileName)) {
        toEnter = state.get(editor.document.fileName);
        toExit = toExit.filter(x => toEnter.indexOf(x) < 0);
    }
    toEnter.forEach(x => enterContext(editor, x));
    toExit.forEach(x => exitContext(editor, x));
}
exports.restoreContext = restoreContext;
class Context {
    constructor(type, title, statusItem) {
        this.type = type;
        this.title = title;
        this.statusItem = statusItem;
    }
    setState(isEnabled) {
        vscode.commands.executeCommand('setContext', this.type, isEnabled);
        if (this.statusItem) {
            const stateText = isEnabled ? 'On' : 'Off';
            this.statusItem.text = `${this.title}: ${stateText}`;
        }
    }
}
//# sourceMappingURL=context.js.map