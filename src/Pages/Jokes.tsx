import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Filters from '../Components/Filters';
import JokeComponent from '../Components/JokeComponent';
import { setNewJoke } from '../feature/jokes.slice';
import { Filters as FilterType, Joke, JokeLang } from '../Model';

const Jokes = () => {
	const dispatch = useDispatch();
	const { category, flags, types, lang } = useSelector<RootState, FilterType>(state => state.filters)

	const getNewJoke = () => {
		const baseURL: string = "https://v2.jokeapi.dev/joke/"
		let filters: string[] = []
		if (lang !== JokeLang.EN) filters.push(`lang=${lang}`)
		if (flags.length !== 0) filters.push(`blacklistFlags=${flags.join(',')}`)
		if (types.length === 1) filters.push(`type=${types[0]}`)

		const query: string = baseURL + category + ((filters.length !== 0) ? '?' + filters.join('&') : '')
		fetch(query)
			.then<Joke>(res => res.json())
			.then(data => dispatch(setNewJoke(data)))
	}

	useEffect(getNewJoke)

	return (
		<div className="d-flex justify-content-center px-4 mt-4 position-relative">
			<Filters />
			<JokeComponent className='mt-5' style={{ minWidth: "50%", maxWidth: "600px", minHeight: "200px" }} onVote={getNewJoke} />
		</div>
	);
};

export default Jokes;