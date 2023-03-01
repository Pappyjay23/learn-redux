import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
	name: "colorCode",
	initialState: { value: "#fff" },
	reducers: {
		changeColor: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
