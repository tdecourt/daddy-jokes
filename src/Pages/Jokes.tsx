import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Offcanvas } from 'react-bootstrap';
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
	type Joke = {
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
	const [joke, setJoke] = useState<Joke>()
	const [jokeCategory, setJokeCategory] = useState<JokeCategory>(JokeCategory.ANY)
	const [jokeLang, setJokeLang] = useState<JokeLang>(JokeLang.EN)
	const [jokeFlags, setJokesFlags] = useState<Array<JokeFlagName>>([])
	const [jokeTypes, setJokesTypes] = useState<Array<JokeType>>([])
	const getJoke = (id?: number) => {
		const baseURL: string = "https://v2.jokeapi.dev/joke/"
		let query: string = ""

		if (jokeLang !== JokeLang.EN) query += "&lang=" + jokeLang
		if (jokeFlags.length !== 0) {
			query += "&blacklistFlags="
			jokeFlags.forEach(flag => query += flag + ",")
			query = query.slice(0, -1)
		}
		if (jokeTypes.length === 1) query += "&type=" + jokeTypes.at(0)

		query = baseURL + jokeCategory + ((query.length !== 0) ? "?" + query.substring(1) : "")
		fetch(query)
			.then<Joke>(res => res.json())
			.then(data => { setJoke(data); setOpen(false); })
	}
	const [open, setOpen] = useState(false); // Show joke response
	const [show, setShow] = useState(true); // Show filters ============================== DEBUG ==============================
	const handleClose = () => { setShow(false); getJoke() }
	const handleShow = () => setShow(true)

	const displayFilter = (
		title: string,
		filters: object,
		activer: (item: any) => boolean,
		clicker: (item: any) => void
	): React.ReactElement | null => {
		return <ButtonGroup vertical className="mb-4 me-4" aria-label={title}>
			<span>{title} :</span>
			{
				Object.values(filters)
					.map(item =>
						<Button key={item}
							active={activer(item)}
							onClick={evt => clicker(item)}>
							{item}
						</Button>
					)
			}
		</ButtonGroup>
	}
	function toggler<T>(item: T, tab: Array<T>, setter: (value: T[]) => void): void {
		if (tab.includes(item)) setter(tab.filter(tabItem => tabItem !== item))
		else setter(tab.concat(item))
	}

	useEffect(getJoke, [])

	return (
		<div className="px-4 mt-4">
			<Button variant="primary" onClick={handleShow}>
				Filters
			</Button>
			<div className="py-5 my-5 text-center col-lg-6 mx-auto">
				{
					(joke?.type === JokeType.TWO_PART) ?
						<div className="lead mb-4">
							<p>{joke?.setup}</p>
							<Fade in={open}>
								<p>{joke?.delivery}</p>
							</Fade>
							<Fade in={!open}>
								<Button onClick={() => setOpen(true)}>Response</Button>
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
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Filters :</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ButtonToolbar className="d-flex flex-row flex-wrap" aria-label="Filters">
						{
							displayFilter(
								"Category",
								JokeCategory,
								category => jokeCategory === category,
								category => setJokeCategory(category)
							)
						}
						{
							displayFilter(
								"Flags",
								JokeFlagName,
								(flag: JokeFlagName) => (jokeFlags.includes(flag)),
								(flag: JokeFlagName) => toggler<JokeFlagName>(flag, jokeFlags, setJokesFlags)
							)
						}
						{
							displayFilter(
								"Type",
								JokeType,
								(type: JokeType) => (jokeTypes.includes(type)),
								(type: JokeType) => toggler<JokeType>(type, jokeTypes, setJokesTypes)
							)
						}
						{
							displayFilter(
								"Language",
								JokeLang,
								lang => jokeLang === lang,
								lang => setJokeLang(lang)
							)
						}
					</ButtonToolbar>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default Jokes;