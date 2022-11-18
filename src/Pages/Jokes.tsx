import React, { useEffect, useState } from 'react';

const Jokes = () => {
	enum JokeCategory {
		ANY = 'Any',
		PROGRAMMING = 'Programming',
		MISC = 'Misc',
		DARK = 'Dark',
		PUN = 'Pun',
		SPOOKY = 'Spooky',
		CHRISTMASS = 'Christmass'
	}
	enum JokeType {
		SINGLE = 'single',
		TWO_PART = 'twopart'
	}
	enum JokeLang {
		EN = 'en',
		FRA = 'fr'
	}
	enum JokeFlagName {
		NSFW = 'nsfw',
		RELIGIOUS = 'religious',
		POLITICAL = 'political',
		RACIST = 'racist',
		SEXIST = 'sexist',
		EXPLICIT = 'explicit'
	}
	type JokeFlags = {
		nsfw: boolean,
		religious: boolean,
		political: boolean,
		racist: boolean,
		sexist: boolean,
		explicit: boolean
	}
	type Joke = {
		error: boolean,
		category: JokeCategory,
		type: JokeType,
		joke?: string,
		setup?: string,
		delivery?: string,
		flags: JokeFlags,
		id: number,
		safe: boolean,
		lang: JokeLang
	}
	const [joke, setJoke] = useState<Joke>()
	const [jokeCategory, setJokeCategory] = useState<JokeCategory>(JokeCategory.ANY)
	const [jokeLang, setJokeLang] = useState<JokeLang>(JokeLang.FRA)
	const [jokeFlags, setJokesFlags] = useState<Array<JokeFlagName>>([])
	const [jokeTypes, setJokesTypes] = useState<Array<JokeType>>([])

	const getJoke = (id?: number) => {
		const baseURL = "https://v2.jokeapi.dev/joke/"
		const query = baseURL + jokeCategory + "?lang=" + jokeLang
		fetch(query)
			.then<Joke>(res => res.json())
			.then(data => setJoke(data))
	}

	useEffect(getJoke, [])

	return (
		<div>
			<div className="px-4 py-5 my-5 text-center">
				<div className="col-lg-6 mx-auto">
					{
						(joke?.type == JokeType.TWO_PART) ?
							<div className="lead mb-4">
								<p>{joke?.setup}</p>
								<p>{joke?.delivery}</p>
							</div>
							:
							<div className="lead mb-4">
								<p>{joke?.joke}</p>
							</div>
					}
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button onClick={evt => getJoke()} type="button" className="btn btn-primary btn-lg px-4 gap-3">Yup</button>
						<button onClick={evt => getJoke()} type="button" className="btn btn-outline-secondary btn-lg px-4">Nope</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jokes;