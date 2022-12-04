import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JokeCategory, JokeFlagName, JokeLang, JokeType } from "../Model";

export const filtersSlice = createSlice({
	name: "filters",
	initialState: {
		category: JokeCategory.ANY as JokeCategory,
		flags: new Array<JokeFlagName>(),
		types: new Array<JokeType>(),
		lang: JokeLang.EN as JokeLang,
	},
	reducers: {
		setCategory: (state, { payload }: PayloadAction<JokeCategory>) => {
			state.category = payload;
		},
		setLang: (state, { payload }: PayloadAction<JokeLang>) => {
			state.lang = payload;
		},
		toggleFlag: (state, { payload }: PayloadAction<JokeFlagName>) => {
			if (state.flags.includes(payload))
				state.flags = state.flags.filter((flag: JokeFlagName) => flag !== payload);
			else state.flags.push(payload);
		},
		toggleType: (state, { payload }: PayloadAction<JokeType>) => {
			if (state.types.includes(payload))
				state.types = state.types.filter((type: JokeType) => type !== payload);
			else state.types.push(payload);
		},
	}
});

export const { setCategory, setLang, toggleFlag, toggleType } = filtersSlice.actions;
export default filtersSlice.reducer;