"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCursorPosition = exports.revealLine = exports.readSnippetFile = exports.pickingRelease = exports.openFileInEditor = exports.getSnippetFile = exports.createSnippetObj = exports.getVsCodeRelease = void 0;
const os = require("os");
const util = require("util");
const fs = require("fs");
const comment_json_1 = require("comment-json");
const vscode = require("vscode");
const _ = require("lodash");
const path = require("path");
function createSnippetObj(prefix) {
    return {
        lang: "markdown",
        description: "",
        name: prefix,
        prefix,
    };
}
exports.createSnippetObj = createSnippetObj;
function readSnippetFile(filePath) {
    const rawSnippets = fs.readFileSync(filePath, { encoding: "utf8" });
    const parsedSnippets = comment_json_1.parse(rawSnippets);
    return { rawSnippets, parsedSnippets };
}
exports.readSnippetFile = readSnippetFile;
const CODE_RELEASE_MAP = {
    VSCodium: "VSCodium",
    "Visual Studio Code - Insiders": "Code - Insiders",
};
function getVsCodeRelease() {
    let vscodeRelease = vscode.env.appName;
    const name = _.get(CODE_RELEASE_MAP, vscodeRelease, "Code");
    return pickingRelease(name);
}
exports.getVsCodeRelease = getVsCodeRelease;
function getSnippetFile(snippetObject, mode) {
    let extensionPath;
    let delimiter = "/";
    let snippetPath;
    if (mode === "local") {
        const wsFolders = vscode.workspace.workspaceFolders;
        if (_.isUndefined(wsFolders) || _.isUndefined(wsFolders[0])) {
            vscode.window.showErrorMessage("no workspace set");
            return;
        }
        const wsRoot = wsFolders[0];
        snippetPath = path.join(wsRoot.uri.fsPath, ".vscode", "dendron.code-snippets");
    }
    else {
        [extensionPath, delimiter] = getVsCodeRelease();
        snippetPath =
            extensionPath +
                util.format("snippets%s.json", delimiter + snippetObject.lang);
    }
    return vscode.Uri.file(snippetPath);
}
exports.getSnippetFile = getSnippetFile;
function pickingRelease(name) {
    const osName = os.type();
    let delimiter = "/";
    let extansionPath;
    switch (osName) {
        case "Darwin": {
            extansionPath =
                process.env.HOME + "/Library/Application Support/" + name + "/User/";
            break;
        }
        case "Linux": {
            extansionPath = process.env.HOME + "/.config/" + name + "/User/";
            break;
        }
        case "Windows_NT": {
            extansionPath = process.env.APPDATA + "\\" + name + "\\User\\";
            delimiter = "\\";
            break;
        }
        default: {
            extansionPath = process.env.HOME + "/.config/" + name + "/User/";
            break;
        }
    }
    return [extansionPath, delimiter];
}
exports.pickingRelease = pickingRelease;
function updateCursorPosition(editor, line, character) {
    //   const editor = vscode.window.activeTextEditor;
    return editor.edit(() => {
        const cursor = editor.selection.active;
        const nextCursor = cursor.with(line, character);
        editor.selection = new vscode.Selection(nextCursor, nextCursor);
    });
}
exports.updateCursorPosition = updateCursorPosition;
function revealLine(currentLineNumber, offset) {
    return vscode.commands.executeCommand("revealLine", {
        lineNumber: currentLineNumber + offset,
        at: "center",
    });
}
exports.revealLine = revealLine;
function showEditor(textDocument) {
    const editor = vscode.window.showTextDocument(textDocument, vscode.ViewColumn.Active);
    if (!editor) {
        throw new Error("Could not show document!");
    }
    return editor;
}
function openFileInEditor(fileItemOrURI) {
    return vscode.workspace.openTextDocument(fileItemOrURI).then(showEditor);
}
exports.openFileInEditor = openFileInEditor;
//# sourceMappingURL=utils.js.map