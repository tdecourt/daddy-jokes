import React, { useState } from 'react';
import { Button, ButtonToolbar, Offcanvas } from 'react-bootstrap';
import { JokeCategory, JokeFlagName, JokeLang, JokeType } from '../Model';
import Filter from './Filter';

const Filters = () => {
	const [show, setShow] = useState(false); // Show filters

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const setJokeCategory = () => null
	const setJokeFlagName = () => null
	const setJokeType = () => null
	const setJokeLang = () => null

	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Filters
			</Button>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Filters :</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ButtonToolbar className="d-flex flex-row flex-wrap" aria-label="Filters">
						<Filter title="Category" filters={JokeCategory} activer={() => false} clicker={setJokeCategory} />
						<Filter title="Flags" filters={JokeFlagName} activer={() => false} clicker={setJokeFlagName} />
						<Filter title="Type" filters={JokeType} activer={() => false} clicker={setJokeType} />
						<Filter title="Language" filters={JokeLang} activer={() => false} clicker={setJokeLang} />
					</ButtonToolbar>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default Filters;