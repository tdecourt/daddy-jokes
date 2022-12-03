import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JokeComponent from '../Components/JokeComponent';
import { setNewJoke } from '../feature/jokes.slice';
import { Joke } from '../Model';

const Jokes = () => {
	const dispatch = useDispatch();

	const getNewJoke = () => {
		const baseURL: string = "https://v2.jokeapi.dev/joke/"
		let query: string = baseURL + "Any"
		fetch(query)
			.then<Joke>(res => res.json())
			.then(data => dispatch(setNewJoke(data)))
	}

	useEffect(getNewJoke)

	return (
		<div className="d-flex justify-content-center px-4 mt-4 ">
			<JokeComponent style={{ width: "50%", minHeight: "200px" }} onVote={getNewJoke} />
		</div>
	);
};

export default Jokes;