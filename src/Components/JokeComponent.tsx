import React, { useEffect, useState } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Joke, JokeType } from '../Model';
import Vote from './Vote';

const JokeComponent = (
	{ joke, voteValue, style, openedDelivery, onVote }: {
		joke?: Joke,
		voteValue?: boolean,
		style?: React.CSSProperties,
		openedDelivery?: boolean,
		onVote?: (evt?: Event) => void
	}
) => {
	const newJoke = useSelector<RootState, Joke>((state) => state.jokes.newJoke);
	const curJoke: Joke = (joke !== undefined) ? joke : newJoke;
	const [jokeDelivery, setJokeDelivery] = useState(openedDelivery);

	useEffect(() => setJokeDelivery(false), [curJoke])

	return (
		<Card
			key={curJoke.id}
			className='d-flex flex-column mt-3 me-2'
			style={(style !== undefined) ? style : { width: "300px", height: "250px" }}
		>
			{
				(curJoke.type === JokeType.TWO_PART) ?
					<Card.Body className='overflow-auto'>
						<Card.Text>{curJoke.setup}</Card.Text>
						<Collapse in={jokeDelivery}>
							<Card.Text>{curJoke.delivery}</Card.Text>
						</Collapse>
						<Collapse in={!jokeDelivery}>
							<Button onClick={() => setJokeDelivery(true)}>Delivery</Button>
						</Collapse>
					</Card.Body>
					:
					<Card.Body className='overflow-auto'>
						<Card.Text>{curJoke.joke}</Card.Text>
					</Card.Body>
			}
			<Card.Footer className={(voteValue !== undefined) ? `bg-${(voteValue) ? 'success' : 'secondary'}` : ''}>
				<Vote style={{ width: "100%" }} joke={curJoke} handleClick={onVote} />
			</Card.Footer>
		</Card>
	);
};

export default JokeComponent;