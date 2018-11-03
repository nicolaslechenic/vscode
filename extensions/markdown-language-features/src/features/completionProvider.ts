/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CompletionItemProvider, CompletionItem } from 'vscode';
import { Emoji } from 'emojilib';
const emojilib: { [index: string]: Emoji } = require('emojilib').lib;

export default class MarkdownEmojiProvider implements CompletionItemProvider {
	provideCompletionItems(): CompletionItem[] {
		const result: CompletionItem[] = [];

		for (let emojiName in emojilib) {
			result.push({
				label: `${emojilib[emojiName].char} ${emojiName}`,
				insertText: emojiName + ':'
			});
		}

		return result;
	}
}
