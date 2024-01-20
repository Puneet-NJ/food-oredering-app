import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import restaurantsReducer from "./RestaurantsSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		restaurants: restaurantsReducer,
		cart: cartReducer,
	},
});

export default appStore;
