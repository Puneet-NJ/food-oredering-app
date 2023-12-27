import { createSlice } from "@reduxjs/toolkit";

const RestaurantsSlice = createSlice({
	name: "Restaurants",
	initialState: {
		restaurants: null,
	},
	reducers: {
		addRestaurants: (state, action) => {
			state.restaurants = action.payload;
		},
	},
});

export const { addRestaurants } = RestaurantsSlice.actions;
export default RestaurantsSlice.reducer;
