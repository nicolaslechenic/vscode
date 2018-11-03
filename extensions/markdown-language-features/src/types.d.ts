declare module 'emojilib' {
	export interface Emoji {
		keywords: string[]
		char: string
		fitzpatrick_scale: boolean
		category: string
	}
	interface EmojiLib {
		lib: Emoji[]
		ordered: Emoji[]
		fitzpatrick_scale_modifiers: string[]
  }
}
