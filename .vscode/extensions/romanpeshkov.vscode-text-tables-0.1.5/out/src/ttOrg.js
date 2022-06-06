"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tt = require("./ttTable");
const vscode = require("vscode");
const verticalSeparator = '|';
const horizontalSeparator = '-';
const intersection = '+';
class OrgParser {
    parse(text) {
        if (!text || text.length === 0) {
            return undefined;
        }
        const result = new tt.Table();
        const strings = text.split('\n').map(x => x.trim()).filter(x => x.startsWith(verticalSeparator));
        for (const s of strings) {
            if (this.isSeparatorRow(s)) {
                result.addRow(tt.RowType.Separator, []);
                continue;
            }
            const lastIndex = s.length - (s.endsWith(verticalSeparator) ? 1 : 0);
            const values = s
                .slice(1, lastIndex)
                .split(verticalSeparator)
                .map(x => x.trim());
            result.addRow(tt.RowType.Data, values);
        }
        return result;
    }
    isSeparatorRow(text) {
        return text.length > 1 && text[1] === horizontalSeparator;
    }
}
exports.OrgParser = OrgParser;
class OrgStringifier {
    constructor() {
        this.reducers = new Map([
            [tt.RowType.Data, this.dataRowReducer],
            [tt.RowType.Separator, this.separatorReducer],
        ]);
    }
    stringify(table) {
        const result = [];
        for (let i = 0; i < table.rows.length; ++i) {
            let rowString = '';
            const rowData = table.getRow(i);
            const reducer = this.reducers.get(table.rows[i].type);
            if (reducer) {
                rowString = rowData.reduce(reducer(table.cols), verticalSeparator);
            }
            result.push(rowString);
        }
        return result.join('\n');
    }
    dataRowReducer(cols) {
        return (prev, cur, idx) => {
            const pad = ' '.repeat(cols[idx].width - cur.length + 1);
            return prev + ' ' + cur + pad + verticalSeparator;
        };
    }
    separatorReducer(cols) {
        return (prev, _, idx) => {
            // Intersections for each cell are '+', except the last one, where it should be '|'
            const ending = (idx === cols.length - 1)
                ? verticalSeparator
                : intersection;
            return prev + horizontalSeparator.repeat(cols[idx].width + 2) + ending;
        };
    }
}
exports.OrgStringifier = OrgStringifier;
class OrgLocator {
    /**
     * Locate start and end of Org table in text from line number.
     *
     * @param reader Reader that is able to read line by line
     * @param lineNr Current line number
     * @returns vscode.Range if table was located. undefined if it failed
     */
    locate(reader, lineNr) {
        // Checks that line starts with vertical bar
        const isTableLikeString = (ln) => {
            if (ln < 0 || ln >= reader.lineCount) {
                return false;
            }
            const line = reader.lineAt(ln);
            const firstCharIdx = line.firstNonWhitespaceCharacterIndex;
            const firstChar = line.text[firstCharIdx];
            return firstChar === '|';
        };
        let start = lineNr;
        while (isTableLikeString(start)) {
            start--;
        }
        let end = lineNr;
        while (isTableLikeString(end)) {
            end++;
        }
        if (start === end) {
            return undefined;
        }
        const startPos = reader.lineAt(start + 1).range.start;
        const endPos = reader.lineAt(end - 1).range.end;
        return new vscode.Range(startPos, endPos);
    }
}
exports.OrgLocator = OrgLocator;
//# sourceMappingURL=ttOrg.js.map