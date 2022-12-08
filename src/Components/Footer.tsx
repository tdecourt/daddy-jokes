import React from "react";
import { useTranslation } from "react-multi-lang";
import { NavLink } from 'react-router-dom';

const Footer = () => {
	const translation = useTranslation("footer");
	const navTranslation = useTranslation("pages");

	return (
		<footer className='footer mt-auto py-3 bg-light d-flex justify-content-evenly'>
			<div>
				<h3>{translation("siteMap")}</h3>
				<ul>
					<li>
						<NavLink to="/">{navTranslation("Home")}</NavLink>
					</li>
					<li>
						<NavLink to="/jokes">{navTranslation("MyJokes")}</NavLink>
					</li>
					<li>
						<NavLink to="/about">{navTranslation("About")}</NavLink>
					</li>
				</ul>
			</div>
			<div>
				<h3>{translation("Resources.title")}</h3>
				<ul>
					<li>
						<a href="https://github.com/tdecourt/daddy-jokes">
							{translation("Resources.Code")}
						</a>
					</li>
					<li>
						<a href="https://v2.jokeapi.dev/">
							{translation("Resources.API")}
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;