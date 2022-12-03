import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "../feature/jokes.slice";

const store = configureStore({
	reducer: {
		jokes: jokeReducer
	}
});
export type RootState = ReturnType<typeof store.getState>
export default store