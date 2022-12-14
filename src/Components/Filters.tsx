import React, { useState } from 'react';
import { Button, ButtonToolbar, Offcanvas } from 'react-bootstrap';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { setCategory, setLang, toggleFlag, toggleType } from '../feature/filters.slice';
import { JokeCategory, jokeCategoryValues, JokeFlagName, jokeFlagNameValues, JokeType, jokeTypeValues } from '../Model';
import Filter from './Filter';

const Filters = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	const categoryValue = useSelector<RootState, JokeCategory>(state => state.filters.category)
	const flagsValues = useSelector<RootState, JokeFlagName[]>(state => state.filters.flags)
	const typesValues = useSelector<RootState, JokeType[]>(state => state.filters.types)

	return (
		<div className="position-absolute top-0 start-0">
			<Button className="mx-4" variant="primary" onClick={handleShow}>
				Filters
			</Button>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Filters :</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ButtonToolbar className="d-flex flex-row flex-wrap" aria-label="Filters">
						<Filter
							title="Category"
							values={jokeCategoryValues}
							isActive={(payload: JokeCategory) => payload === categoryValue}
							handleClick={(payload: JokeCategory) => setCategory(payload)}
							translation={useTranslation("filter.Category")}
						/>
						<Filter
							title="Flags"
							values={jokeFlagNameValues}
							isActive={(payload: JokeFlagName) => flagsValues.includes(payload)}
							handleClick={(payload: JokeFlagName) => toggleFlag(payload)}
							translation={useTranslation("filter.Flag")}
						/>
						<Filter
							title="Type"
							values={jokeTypeValues}
							isActive={(payload: JokeType) => typesValues.includes(payload)}
							handleClick={(payload: JokeType) => toggleType(payload)}
							translation={useTranslation("filter.Type")}
						/>
					</ButtonToolbar>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};

export default Filters;