import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import JokeComponent from '../Components/JokeComponent';
import Statistics from '../Components/Statistics';
import { Joke } from '../Model';

const MyJokes = () => {
	const jokes = useSelector<RootState, Array<{ joke: Joke, vote: boolean }>>((state) => state.jokes.votedJokes)

	return (
		<>
			<Statistics />
			<div className='d-flex flex-wrap justify-content-around'>
				{jokes.map(item =>
					<JokeComponent key={item.joke.id} joke={item.joke} voteValue={item.vote} deletable />
				)}
			</div>
		</>
	);
};

export default MyJokes;