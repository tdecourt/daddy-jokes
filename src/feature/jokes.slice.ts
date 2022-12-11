import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Joke, VotedJoke } from "../Model";

export const jokesSlice = createSlice({
	name: "jokes",
	initialState: {
		newJoke: <Joke>{},
		votedJokes: new Array<VotedJoke>()
	},
	reducers: {
		setNewJoke: (state, { payload }: PayloadAction<Joke>) => {
			state.newJoke = payload;
		},
		voteJoke: (state, { payload }: PayloadAction<{ vote: boolean, joke?: Joke }>) => {
			const votedJoke: Joke = (payload.joke !== undefined) ? payload.joke : state.newJoke;
			state.votedJokes = state.votedJokes
				.filter(({ joke }) => joke.id !== votedJoke.id)
			state.votedJokes.push({ joke: votedJoke, vote: payload.vote })
			state.votedJokes.sort((a, b) => a.joke.id - b.joke.id)
		},
		unvoteJoke: (state, { payload }: PayloadAction<Joke>) => {
			state.votedJokes = state.votedJokes
				.filter(({ joke }) => joke.id !== payload.id)
		}
	}
});

export const { setNewJoke, voteJoke, unvoteJoke } = jokesSlice.actions;
export default jokesSlice.reducer;