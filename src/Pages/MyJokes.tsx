import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Vote from '../Components/Vote';
import { Joke } from '../Model';

const MyJokes = () => {
	const jokes = useSelector<RootState, Array<{ joke: Joke, vote: boolean }>>((state) => state.jokes.votedJokes)

	return (
		<div className='d-flex flex-wrap justify-content-around'>
			{jokes.map(item =>
				<Card key={item.joke.id} className='d-flex flex-column mt-3 me-2' style={{ width: "300px", height: "250px" }}>
					<Card.Body className='overflow-auto'>
						<Card.Text>{item.joke.setup}</Card.Text>
						<Card.Text>{item.joke.delivery}</Card.Text>
						<Card.Text>{item.joke.joke}</Card.Text>
					</Card.Body>
					<Card.Footer className={` bg-${(item.vote) ? 'success' : 'secondary'}`}>
						<Vote style={{ width: "100%" }} joke={item.joke} />
					</Card.Footer>
				</Card>
			)}
		</div>
	);
};

export default MyJokes;