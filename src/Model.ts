export enum JokeCategory {
	ANY = 'Any',
	PROGRAMMING = 'Programming',
	MISC = 'Miscellaneous',
	DARK = 'Dark',
	PUN = 'Pun',
	SPOOKY = 'Spooky',
	CHRISTMASS = 'Christmass'
}
export const jokeCategoryValues: JokeCategory[] = [
	JokeCategory.ANY,
	JokeCategory.PROGRAMMING,
	JokeCategory.MISC,
	JokeCategory.DARK,
	JokeCategory.PUN,
	JokeCategory.SPOOKY,
	JokeCategory.CHRISTMASS
]

export enum JokeType {
	SINGLE = 'single',
	TWO_PART = 'twopart'
}
export const jokeTypeValues: JokeType[] = [
	JokeType.SINGLE,
	JokeType.TWO_PART
]

export enum JokeLang {
	EN = 'en',
	FRA = 'fr'
}
export const jokeLangValues: JokeLang[] = [
	JokeLang.EN,
	JokeLang.FRA
]

export enum JokeFlagName {
	NSFW = 'nsfw',
	RELIGIOUS = 'religious',
	POLITICAL = 'political',
	RACIST = 'racist',
	SEXIST = 'sexist',
	EXPLICIT = 'explicit'
}
export const jokeFlagNameValues: JokeFlagName[] = [
	JokeFlagName.NSFW,
	JokeFlagName.RELIGIOUS,
	JokeFlagName.POLITICAL,
	JokeFlagName.RACIST,
	JokeFlagName.SEXIST,
	JokeFlagName.EXPLICIT
]

export type JokeFilter = JokeCategory | JokeFlagName | JokeLang | JokeType
export type JokeFilterType = typeof JokeCategory | typeof JokeFlagName | typeof JokeLang | typeof JokeType

export type Filters = {
	category: JokeCategory,
	flags: JokeFlagName[],
	types: JokeType[],
	lang: JokeLang
}

export type Joke = {
	id: number,
	error: boolean,
	joke?: string,
	setup?: string,
	delivery?: string,
	message?: string,
	category: JokeCategory,
	type: JokeType,
	flags: {
		nsfw: boolean,
		religious: boolean,
		political: boolean,
		racist: boolean,
		sexist: boolean,
		explicit: boolean
	},
	safe: boolean,
	lang: JokeLang
}