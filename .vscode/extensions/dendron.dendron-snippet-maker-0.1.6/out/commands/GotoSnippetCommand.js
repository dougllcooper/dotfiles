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
exports.GotoSnippetCommand = void 0;
const utils_1 = require("../utils");
const vscode = require("vscode");
const _ = require("lodash");
const base_1 = require("./base");
const constants_1 = require("../constants");
class GotoSnippetCommand extends base_1.BasicCommand {
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
            const mode = this.mode;
            const { snippetPrefix } = opts;
            if (_.isUndefined(snippetPrefix)) {
                return;
            }
            const snippetObject = utils_1.createSnippetObj(snippetPrefix);
            const snippetFile = utils_1.getSnippetFile(snippetObject, mode);
            if (_.isUndefined(snippetFile)) {
                vscode.window.showErrorMessage(`no snippet file found. please run ${constants_1.DENDRON_COMMANDS.CREATE_GLOBAL_SNIPPET.title} first`);
                return;
            }
            const editor = yield utils_1.openFileInEditor(snippetFile);
            const text = editor.document.getText();
            const needle = `"prefix": "${snippetObject.name}"`;
            const needleIndex = text.indexOf(needle);
            if (needleIndex < 0) {
                vscode.window.showErrorMessage(`snippet ${snippetPrefix} not found`);
                return;
            }
            const out = text.slice(0, needleIndex);
            const lines = out.split("\n").length - 1;
            yield utils_1.revealLine(lines, 0);
            yield utils_1.updateCursorPosition(editor, lines, 0);
            return;
        });
    }
}
exports.GotoSnippetCommand = GotoSnippetCommand;
//# sourceMappingURL=GotoSnippetCommand.js.map