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
exports.section = 'text-tables';
exports.modeKey = 'mode';
exports.showStatusKey = 'showStatus';
var Mode;
(function (Mode) {
    Mode["Org"] = "org";
    Mode["Markdown"] = "markdown";
})(Mode = exports.Mode || (exports.Mode = {}));
function build() {
    const c = vscode.workspace.getConfiguration(exports.section);
    return {
        mode: c.get(exports.modeKey, Mode.Markdown),
        showStatus: c.get(exports.showStatusKey, true)
    };
    // Object.assign(cfg, overrides);
}
exports.build = build;
function override(overrides) {
    return __awaiter(this, void 0, void 0, function* () {
        const c = vscode.workspace.getConfiguration(exports.section);
        for (const k of Object.keys(overrides)) {
            yield c.update(k, overrides[k], false);
        }
    });
}
exports.override = override;
//# sourceMappingURL=configuration.js.map