import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { voteJoke } from '../feature/jokes.slice';
import { Joke } from '../Model';

const Vote = (
	{ handleClick, joke, className, style, disabled }: {
		handleClick?: (evt?: Event) => void,
		joke?: Joke,
		className?: string,
		style?: React.CSSProperties,
		disabled?: boolean
	}) => {
	const dispatch = useDispatch();

	return (
		<ButtonGroup
			className={className}
			style={style}
			onClick={evt => { if (handleClick !== undefined) handleClick() }}
		>
			<Button variant="success" disabled={disabled} onClick={evt => dispatch(voteJoke({ vote: true, joke: joke }))}>Yup</Button>
			<Button variant="secondary" disabled={disabled} onClick={evt => dispatch(voteJoke({ vote: false, joke: joke }))}>Nope</Button>
		</ButtonGroup>
	);
};

export default Vote;