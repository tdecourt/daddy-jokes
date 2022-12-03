import React, { useEffect, useState } from 'react';
import { Button, Fade } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setNewJoke } from '../feature/jokes.slice';
import { Joke, JokeType } from '../Model';
import Vote from './Vote';

const JokeComponent = () => {
	const dispatch = useDispatch();
	const joke = useSelector<RootState, Joke>((state) => state.jokes.newJoke)
	const [jokeSecondPart, setJokeSecondPart] = useState(false);

	const getNewJoke = () => {
		const baseURL: string = "https://v2.jokeapi.dev/joke/"
		let query: string = baseURL + "Any"
		fetch(query)
			.then<Joke>(res => res.json())
			.then(data => dispatch(setNewJoke(data)))
	}

	useEffect(getNewJoke, [])

	return (
		<div className="py-5 my-5 text-center col-lg-6 mx-auto">
			{
				(joke?.type === JokeType.TWO_PART) ?
					<div className="lead mb-4">
						<p>{joke?.setup}</p>
						<Fade in={jokeSecondPart}>
							<p>{joke?.delivery}</p>
						</Fade>
						<Fade in={!jokeSecondPart}>
							<Button onClick={() => setJokeSecondPart(true)}>Response</Button>
						</Fade>
					</div>
					:
					<div className="lead mb-4">
						<p>{joke?.joke}</p>
					</div>
			}
			<Vote className="w-100" style={{ maxWidth: "300px" }} handleClick={getNewJoke} />
		</div>
	);
};

export default JokeComponent;