import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer mt-auto py-3 bg-light d-flex justify-content-evenly'>
			<div>
				<h3>Plan du site</h3>
				<ul>
					<li>
						<NavLink to="/">Jokes</NavLink>
					</li>
					<li>
						<NavLink to="/jokes">Mes Jokes</NavLink>
					</li>
					<li>
						<NavLink to="/about">À propos</NavLink>
					</li>
				</ul>
			</div>
			<div>
				<h3>Ressources</h3>
				<ul>
					<li>
						<a href="https://github.com/tdecourt/daddy-jokes">
							Code du projet
						</a>
					</li>
					<li>
						<a href="https://sv443.net/jokeapi/v2/">
							Jokes API
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;