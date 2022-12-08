import React from 'react';
import { Card } from 'react-bootstrap';
import Vote from './Vote';

const ErrorCard = ({ message, className }: {
	message?: string,
	className?: string
}) => {
	return (
		<Card
			className={className}
			bg='danger'
			text='white'
			style={{ width: "300px", height: "250px" }}
		>
			<Card.Body >
				<Card.Text>{message}</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Vote style={{ width: "100%" }} disabled />
			</Card.Footer>
		</Card>
	);
};

export default ErrorCard;