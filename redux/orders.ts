import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
	name: "language",
	initialState: {
		language: true
	},
	reducers: {
		setLanguage: (state, actions) => {
			state.language = actions.payload;
		}
	}
})
export interface ReduxState {
	language: {
		language: boolean;
	}
}
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;