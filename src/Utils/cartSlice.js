import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "Cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addCart: (state, action) => {
			state.cart.push(action.payload);
		},
		updateCart: (state, action) => {
			state.cart = action.payload;
		},
	},
});

export const { addCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
