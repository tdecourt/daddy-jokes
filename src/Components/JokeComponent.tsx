import React, { useEffect, useState } from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { unvoteJoke } from '../feature/jokes.slice';
import { Joke, JokeType } from '../Model';
import DeleteButton from './DeleteButton';
import ErrorCard from './ErrorCard';
import Vote from './Vote';

const JokeComponent = (
	{ joke, voteValue, className, style, onVote, deletable }: {
		joke?: Joke,
		voteValue?: boolean,
		className?: string,
		style?: React.CSSProperties,
		onVote?: (evt?: Event) => void,
		deletable?: boolean
	}
) => {
	const dispatch = useDispatch();
	const newJoke = useSelector<RootState, Joke>((state) => state.jokes.newJoke);
	const curJoke: Joke = (joke !== undefined) ? joke : newJoke;
	const [jokeDelivery, setJokeDelivery] = useState(false);
	const translation = useTranslation("joke");

	useEffect(() => setJokeDelivery(false), [curJoke])

	if (curJoke.error) return (<ErrorCard className={'d-flex flex-column mt-3 me-2 ' + className} key={curJoke.id} message={curJoke.message} />)

	return (
		<Card
			key={curJoke.id}
			className={'d-flex flex-column mt-3 me-2 ' + className}
			style={(style !== undefined) ? style : { width: "300px", height: "250px" }}
		>
			{
				(curJoke.type === JokeType.TWO_PART) ?
					<Card.Body className='overflow-auto position-relative'>
						<Card.Text>{curJoke.setup}</Card.Text>
						<Collapse in={jokeDelivery}>
							<Card.Text>{curJoke.delivery}</Card.Text>
						</Collapse>
						<Collapse in={!jokeDelivery}>
							<Button onClick={() => setJokeDelivery(true)}>{translation("delivery")}</Button>
						</Collapse>
						{(deletable) ?
							<DeleteButton
								className='position-absolute bottom-0 end-0 mb-3 me-3'
								style={{ width: 40, height: 40, padding: 0 }}
								onClick={() => dispatch(unvoteJoke(curJoke))}
							/>
							: ''
						}
					</Card.Body>
					:
					<Card.Body className='overflow-auto position-relative'>
						<Card.Text>{curJoke.joke}</Card.Text>
						{(deletable) ?
							<DeleteButton
								className='position-absolute bottom-0 end-0 mb-3 me-3'
								style={{ width: 40, height: 40, padding: 0 }}
								onClick={() => dispatch(unvoteJoke(curJoke))}
							/>
							: ''
						}
					</Card.Body>
			}
			<Card.Footer className={(voteValue !== undefined) ? `bg-${(voteValue) ? 'success' : 'secondary'}` : ''}>
				<Vote style={{ width: "100%" }} joke={curJoke} handleClick={onVote} />
			</Card.Footer>
		</Card>
	);
};

export default JokeComponent;