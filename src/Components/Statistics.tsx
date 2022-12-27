import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RootState } from '../app/store';
import { VotedJoke, JokeCategory, jokeCategoryValues } from '../Model';


const Statistics = () => {
	const rootTranslation = useTranslation();
	const categoryTranslation = useTranslation("filter.Category");
	const voteTranslation = useTranslation("joke.vote");
	const jokes: VotedJoke[] = useSelector<RootState, VotedJoke[]>(state => state.jokes.votedJokes);

	const getData: () => {
		name: string,
		votes: {
			upvote: number,
			downvote: number
		}
	}[] = () => {
		return jokeCategoryValues
			.filter(category => category !== JokeCategory.ANY)
			.map<{
				name: string,
				votes: {
					upvote: number,
					downvote: number
				}
			}>(category => {
				return {
					name: categoryTranslation(category),
					votes: {
						upvote: jokes
							.filter(({ joke, vote }) => (joke.category === category && vote === true))
							.length,
						downvote: jokes
							.filter(({ joke, vote }) => (joke.category === category && vote === false))
							.length
					}
				}
			})
	}

	return (
		<div className="d-flex justify-content-around align-items-center mt-3 mx-5 w-auto">
			<BarChart data={getData()} width={750} height={250} >
				<XAxis dataKey="name" />
				<YAxis label={{ value: rootTranslation("statistics.number"), angle: -90, position: 'insideLeft' }} />
				<Tooltip />
				<Legend />
				<Bar name={voteTranslation("No")} dataKey="votes.downvote" stackId="a" fill="#5c636a" />
				<Bar name={voteTranslation("Yes")} dataKey="votes.upvote" stackId="a" fill="#198754" />
			</BarChart>
		</div>
	);
};

export default Statistics;