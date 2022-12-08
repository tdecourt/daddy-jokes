import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { setLanguage, useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../app/store';
import { setLang } from '../feature/filters.slice';
import { JokeLang, jokeLangValues } from '../Model';

const Navigation = () => {
	const dispatch = useDispatch();
	const curLang: JokeLang = useSelector<RootState, JokeLang>(state => state.filters.lang)
	const langs: JokeLang[] = jokeLangValues;
	const translation = useTranslation();

	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand><NavLink className="text-decoration-none text-light" to="/">😂 {translation('title')}</NavLink></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="text-decoration-none text-light me-3" to="/jokes">{translation('pages.MyJokes')}</NavLink>
						<NavLink className="text-decoration-none text-light me-3" to="/about">{translation('pages.About')}</NavLink>
					</Nav>
					<NavDropdown autoClose="outside" className='me-5 text-light' title="Lang" menuVariant='dark'>
						{langs.map(lang =>
							<Dropdown.Item
								key={lang}
								onClick={evt => { dispatch(setLang(lang)); setLanguage(lang) }}
								active={curLang === lang}
							>
								{lang}
							</Dropdown.Item>
						)}
					</NavDropdown>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;