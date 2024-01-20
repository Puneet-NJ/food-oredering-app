import React from "react";
import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.cart);

	console.log(cartItems);
	if (!cartItems) return;

	let price = 0;
	cartItems.map(
		(item) => (price += item.totalItems * (item?.card?.info?.price / 100))
	);

	price = price.toFixed(2);

	return (
		<div className="my-20 flex justify-center">
			<div className="w-[50%] bg-slate-300">
				<h1 className="py-3 px-7 text-xl font-bold shadow-lg">Cart</h1>
				<div>
					{cartItems.length !== 0 ? (
						<CategoryItems items={cartItems} showCategory={true} />
					) : (
						<h1 className="text-center mt-[15%] text-3xl">
							Your Cart is empty!!😕
						</h1>
					)}
				</div>
				{cartItems.length > 0 && (
					<div className="py-4 flex justify-center shadow-lg">
						<button className="px-10 shadow-xl py-3 bg-green-600 font-semibold text-white hover:bg-green-700 hover:scale-95 duration-200">
							PLACE ORDER
						</button>
					</div>
				)}
			</div>
			<div className="w-[20%] ml-10 bg-slate-300 px-5 h-72 shadow-lg">
				<h1 className="py-4 font-semibold border-b border-black border-dotted">
					PRICE DETAILS
				</h1>
				<div className="flex justify-between mt-6">
					<div>Price</div>
					<div>₹{price}</div>
				</div>

				<div className="flex justify-between mt-4">
					<div>Discount</div>
					<div className="text-green-600">₹0</div>
				</div>

				<div className="flex justify-between mt-4 mb-6">
					<div>Delivery charges</div>
					<div className="text-green-600">Free</div>
				</div>

				<div className="flex justify-between font-bold py-4 border-y border-black border-dotted">
					<div>Total amount</div>
					<div>₹{price}</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
