import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import restaurantsReducer from "./RestaurantsSlice";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		restaurants: restaurantsReducer,
	},
});

export default appStore;
