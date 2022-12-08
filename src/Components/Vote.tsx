import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-multi-lang';
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
	const translation = useTranslation("joke.vote")

	return (
		<ButtonGroup
			className={className}
			style={style}
			onClick={evt => { if (handleClick !== undefined) handleClick() }}
		>
			<Button variant="success" disabled={disabled} onClick={evt => dispatch(voteJoke({ vote: true, joke: joke }))}>{translation("Yes")}</Button>
			<Button variant="secondary" disabled={disabled} onClick={evt => dispatch(voteJoke({ vote: false, joke: joke }))}>{translation("No")}</Button>
		</ButtonGroup>
	);
};

export default Vote;