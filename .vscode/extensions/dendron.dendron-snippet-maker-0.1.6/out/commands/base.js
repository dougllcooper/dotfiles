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
exports.BasicCommand = exports.BaseCommand = void 0;
const _ = require("lodash");
const vscode_1 = require("vscode");
class BaseCommand {
    gatherInputs() {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    showResponse(_resp) {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    sanityCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            return;
        });
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const out = yield this.sanityCheck();
                if (!_.isUndefined(out)) {
                    vscode_1.window.showErrorMessage(out);
                    return;
                }
                const inputs = yield this.gatherInputs();
                if (!_.isUndefined(inputs)) {
                    const opts = yield this.enrichInputs(inputs);
                    if (_.isUndefined(opts)) {
                        return;
                    }
                    const resp = yield this.execute(opts);
                    this.showResponse(resp);
                    return resp;
                }
                return;
            }
            catch (err) {
                vscode_1.window.showErrorMessage(err.message);
                return;
            }
        });
    }
}
exports.BaseCommand = BaseCommand;
BaseCommand.showInput = vscode_1.window.showInputBox;
class BasicCommand extends BaseCommand {
    enrichInputs(inputs) {
        return __awaiter(this, void 0, void 0, function* () {
            return inputs;
        });
    }
}
exports.BasicCommand = BasicCommand;
//# sourceMappingURL=base.js.map