export enum JokeCategory {
	ANY = 'Any',
	PROGRAMMING = 'Programming',
	MISC = 'Misc',
	DARK = 'Dark',
	PUN = 'Pun',
	SPOOKY = 'Spooky',
	CHRISTMASS = 'Christmass'
}

export enum JokeType {
	SINGLE = 'single',
	TWO_PART = 'twopart'
}

export enum JokeLang {
	EN = 'en',
	FRA = 'fr'
}

export enum JokeFlagName {
	NSFW = 'nsfw',
	RELIGIOUS = 'religious',
	POLITICAL = 'political',
	RACIST = 'racist',
	SEXIST = 'sexist',
	EXPLICIT = 'explicit'
}

export type Joke = {
	error: boolean,
	category: JokeCategory,
	type: JokeType,
	joke?: string,
	setup?: string,
	delivery?: string,
	flags: {
		nsfw: boolean,
		religious: boolean,
		political: boolean,
		racist: boolean,
		sexist: boolean,
		explicit: boolean
	},
	id: number,
	safe: boolean,
	lang: JokeLang
}