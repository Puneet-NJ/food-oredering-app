import { createSlice } from "@reduxjs/toolkit";

const RestaurantsSlice = createSlice({
	name: "Restaurants",
	initialState: {
		restaurants: null,
		restaurantMenu: null,
		restaurantInMenuPage: null,
	},
	reducers: {
		addRestaurants: (state, action) => {
			state.restaurants = action.payload;
		},
		addRestaurantMenu: (state, action) => {
			state.restaurantMenu = action.payload;
		},
		addRestaurantInMenuPage: (state, action) => {
			state.restaurantInMenuPage = action.payload;
		},
	},
});

export const { addRestaurants, addRestaurantMenu, addRestaurantInMenuPage } =
	RestaurantsSlice.actions;
export default RestaurantsSlice.reducer;
