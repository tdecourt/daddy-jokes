import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';

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
	const [open, setOpen] = useState(false);
	const [joke, setJoke] = useState<Joke>()
	const [jokeCategory, setJokeCategory] = useState<JokeCategory>(JokeCategory.DARK)
	const [jokeLang, setJokeLang] = useState<JokeLang>(JokeLang.EN)
	const [jokeFlags, setJokesFlags] = useState<Array<JokeFlagName>>([])
	const [jokeTypes, setJokesTypes] = useState<Array<JokeType>>([JokeType.SINGLE, JokeType.TWO_PART])

	const getJoke = (id?: number) => {
		const baseURL: string = "https://v2.jokeapi.dev/joke/"
		let query: string = ""

		if (jokeLang != JokeLang.EN) query += "&lang=" + jokeLang
		if (jokeFlags.length != 0) {
			query += "&blacklistFlags="
			jokeFlags.forEach(flag => query += flag + ",")
			query = query.slice(0, -1)
		}
		if (jokeTypes.length == 1) query += "&type=" + jokeTypes.at(0)

		query = baseURL + jokeCategory + ((query.length != 0) ? "?" + query.substring(1) : "")
		console.log(query);
		fetch(query)
			.then<Joke>(res => res.json())
			.then(data => { setJoke(data); setOpen(false); })
	}

	useEffect(getJoke, [])

	return (
		<div className="px-4 py-5 my-5 text-center">
			<form className="bg-dark w-100">

			</form>
			<div className="col-lg-6 mx-auto">
				{
					(joke?.type == JokeType.TWO_PART) ?
						<div className="lead mb-4">
							<p>{joke?.setup}</p>
							<Fade in={open}>
								<p>{joke?.delivery}</p>
							</Fade>
							<Fade in={!open}>
								<Button onClick={() => setOpen(true)}>Réponse</Button>
							</Fade>
						</div>
						:
						<div className="lead mb-4">
							<p>{joke?.joke}</p>
						</div>
				}
				<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
					<button onClick={evt => getJoke()} type="button" className="btn btn-success btn-lg px-4 gap-3">Yup</button>
					<button onClick={evt => getJoke()} type="button" className="btn btn-secondary btn-lg px-4">Nope</button>
				</div>
			</div>
		</div>
	);
};

export default Jokes;