"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = exports._noteAddBehaviorEnum = exports.DENDRON_COMMANDS = exports.ICONS = exports.extensionQualifiedId = exports.DENDRON_WS_NAME = void 0;
exports.DENDRON_WS_NAME = "dendron.code-workspace";
exports.extensionQualifiedId = `dendron.dendron`;
const CMD_PREFIX = "Dendron:";
exports.ICONS = {
    STUB: "gist-new",
    SCHEMA: "repo",
};
// CONFIGURE_POD: {
//   key: "dendron.configurePod",
//   title: `${CMD_PREFIX} Configure Pod`,
//   group: "pods",
//   desc: "Update your pod configuration",
//   docLink: "dendron.topic.pod.md",
//   docPreview:
//     "![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pods.configure.gif)",
// },
exports.DENDRON_COMMANDS = {
    // --- Notes
    GOTO_GLOBAL_SNIPPET: {
        key: "dendron.gotoGlobalSnippet",
        title: `Dendron: Goto Global Snippet`,
        group: "snippets",
        desc: "Go to existing snippet",
        skipDocs: true,
    },
    CREATE_GLOBAL_SNIPPET: {
        key: "dendron.createGlobalSnippet",
        title: `Dendron: Create Global Snippet`,
        group: "snippets",
        desc: "Create snippet from selection",
        skipDocs: true,
    },
};
const _noteDateDesc = (type) => `date format used for ${type} notes`;
const _noteNameDesc = (type) => `named used for ${type} notes`;
const _noteAddBehaviorDesc = (type) => `strategy for adding new ${type} notes`;
exports._noteAddBehaviorEnum = [
    "childOfDomain",
    "childOfDomainNamespace",
    "childOfCurrent",
    "asOwnDomain",
];
exports.CONFIG = {
// DAILY_JOURNAL_DOMAIN: {
//   key: "dendron.dailyJournalDomain",
//   type: "string",
//   default: "daily",
//   description: "domain where daily journals are kept",
// }
};
//# sourceMappingURL=constants.js.map