import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "../feature/filters.slice";
import jokeReducer from "../feature/jokes.slice";

const store = configureStore({
	reducer: {
		jokes: jokeReducer,
		filters: filtersReducer
	}
});

export type RootState = ReturnType<typeof store.getState>
export default store