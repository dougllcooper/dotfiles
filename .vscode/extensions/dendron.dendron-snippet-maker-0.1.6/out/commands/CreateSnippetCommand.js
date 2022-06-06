"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSnippetCommand = void 0;
const fs = require("fs-extra");
const _ = require("lodash");
const vscode = require("vscode");
const utils_1 = require("../utils");
const base_1 = require("./base");
const { parse, stringify } = require("comment-json");
function buildBodyFromText(text) {
    return text.split("\n");
}
function initFile(snippObj, body, saveLocation) {
    var snippets = {};
    // @ts-ignore
    snippets[snippObj.name] = {
        prefix: snippObj.prefix,
        body: buildBodyFromText(body),
        description: snippObj.description,
    };
    var snippetString = JSON.stringify(snippets, null, 2);
    var toSave = snippetString;
    return fs.writeFileSync(saveLocation, toSave);
}
function writeSnippetToFile({ existingSnippets, newSnippet, userSnippetsFile, cleanCode, }) {
    existingSnippets[newSnippet.name] = {
        prefix: newSnippet.prefix,
        body: buildBodyFromText(cleanCode),
        description: newSnippet.description,
    };
    var snippetString = stringify(existingSnippets, null, 2);
    var toSave = snippetString;
    fs.writeFile(userSnippetsFile, toSave, (err) => {
        if (err) {
            vscode.window.showErrorMessage("Error while saving new snippet!");
        }
        vscode.window.showInformationMessage("snippet updated");
        const uri = vscode.Uri.file(userSnippetsFile);
        vscode.window.showTextDocument(uri);
    });
}
class CreateSnippetCommand extends base_1.BasicCommand {
    constructor(mode) {
        super();
        this.mode = mode;
    }
    gatherInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            const snippetPrefix = yield vscode.window.showInputBox({
                prompt: "Enter snippet prefix",
            });
            if (_.isUndefined(snippetPrefix)) {
                return;
            }
            return { snippetPrefix };
        });
    }
    execute(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let editor = vscode.window.activeTextEditor;
            const mode = this.mode;
            if (_.isUndefined(editor)) {
                vscode.window.showErrorMessage("no editor found");
                return;
            }
            // TODO: tmp
            let selected = editor.selection;
            let selectedText = editor.document.getText(selected);
            let cleanCode = selectedText;
            // let cleanCode = "bond";
            let snippetObject = utils_1.createSnippetObj(opts.snippetPrefix);
            const snippetFile = utils_1.getSnippetFile(snippetObject, mode);
            if (_.isUndefined(snippetFile)) {
                return;
            }
            let userSnippetsFile = snippetFile.fsPath;
            let check;
            fs.ensureFileSync(userSnippetsFile);
            const savedSnippets = fs.readFileSync(userSnippetsFile, {
                encoding: "utf8",
            });
            let restoreObject = {};
            if (!_.isEmpty(_.trim(savedSnippets))) {
                restoreObject = parse(savedSnippets);
            }
            // check if overwriting
            if (restoreObject[snippetObject.name] !== undefined ||
                restoreObject[snippetObject.name] === null) {
                const resp = yield vscode.window.showErrorMessage("found existing entry, overwrite?", "Overwrite", "Cancel");
                if (resp === "Cancel") {
                    yield vscode.window.showInformationMessage("Cancelled");
                    return;
                }
                writeSnippetToFile({
                    existingSnippets: restoreObject,
                    newSnippet: snippetObject,
                    userSnippetsFile,
                    cleanCode,
                });
            }
            else {
                writeSnippetToFile({
                    existingSnippets: restoreObject,
                    newSnippet: snippetObject,
                    userSnippetsFile,
                    cleanCode,
                });
            }
        });
    }
}
exports.CreateSnippetCommand = CreateSnippetCommand;
//# sourceMappingURL=CreateSnippetCommand.js.map