import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Filter = ({ title, filters, activer, clicker }: {
	title: string,
	filters: object,
	activer: (item: any) => boolean,
	clicker: (item: any) => void
}) => {
	return (
		<ButtonGroup vertical className="mb-4 me-4" aria-label={title}>
			<span>{title} :</span>
			{
				Object.values(filters)
					.map(item =>
						<Button key={item}
							active={activer(item)}
							onClick={evt => clicker(item)}>
							{item}
						</Button>
					)
			}
		</ButtonGroup>
	);
};

export default Filter;