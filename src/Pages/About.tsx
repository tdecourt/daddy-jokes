import React from 'react';
import { useTranslation } from 'react-multi-lang';

const About = () => {
	const rootTranslation = useTranslation();
	const translation = useTranslation("about");

	return (
		<div className="px-4 py-5 my-5 text-center">
			<h1 className="display-5 fw-bold">{translation("title", { "name": rootTranslation("title") })}</h1>
			<div className="mx-auto">
				<p className="lead my-4">
					{translation("main0")}<a href="https://github.com/tdecourt">Thomas DECOURTY</a>{translation("main1")}<a href="https://iutnantes.univ-nantes.fr/">IUT de Nantes</a>
				</p>
				<p>
					{translation("second0")}<a href="https://v2.jokeapi.dev">{rootTranslation("footer.Resources.API")}</a>{translation("second1")}<a href="https://github.com/tdecourt/daddy-jokes">Github</a>{translation("second2")}<a href="https://github.com/tdecourt/daddy-jokes/blob/master/LICENSE">{rootTranslation("licence")}</a>.
				</p>
			</div>
		</div>
	);
};

export default About;