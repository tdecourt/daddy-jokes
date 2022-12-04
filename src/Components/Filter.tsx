import { AnyAction } from '@reduxjs/toolkit';
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { JokeFilter } from '../Model';

interface FilterProps<T extends JokeFilter> {
	title: string,
	values: T[],
	isActive: (payload: T) => boolean,
	handleClick: (payload: T) => AnyAction
}

const Filter = <T extends JokeFilter>({
	title,
	values,
	isActive,
	handleClick
}: FilterProps<T>) => {
	const dispatch = useDispatch();

	return (
		<ButtonGroup vertical className="mb-4 me-4" aria-label={title}>
			<span>{title} :</span>
			{values.map(value =>
				<Button key={value} active={isActive(value)} onClick={evt => dispatch(handleClick(value))}>
					{value}
				</Button>
			)}
		</ButtonGroup>
	);
};

export default Filter;