import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExampleState {
	value: number;
}

const initialState: ExampleState = {
	value: 0,
};

export const exampleSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = exampleSlice.actions;

export default exampleSlice.reducer;
