import React, { useEffect, useState } from "react";
import { ITEM_IMAGE } from "../Utils/mockData";
import { useDispatch } from "react-redux";
import { addCart, updateCart } from "../Utils/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoryItems = (props) => {
	const { items, title, showCategory, setShowCategory, index } = props;
	const [filteredItems, setFilteredItems] = useState(items);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const cart = useSelector((store) => store.cart.cart);

	if (!filteredItems) return;

	const handleAddToCart = (item) => {
		const present = cart.some(
			(it) => JSON.stringify({ ...item, totalItems: 1 }) === JSON.stringify(it)
		);

		if (!present) dispatch(addCart({ ...item, totalItems: 1 }));

		navigate("/browse/cart");
	};

	const handleInc_Dec = (itemIndex, inc) => {
		if (!inc && cart[itemIndex].totalItems === 1) {
			return;
		}

		let newCart;

		newCart = cart.map((it, i) => {
			if (itemIndex === i) {
				return {
					...it,
					totalItems: inc ? it?.totalItems + 1 : it?.totalItems - 1,
				};
			}

			return {
				...it,
				totalItems: it?.totalItems,
			};
		});

		dispatch(updateCart(newCart));
		setFilteredItems(newCart);
	};

	const handleRemoveItem = (itemIndex) => {
		const newItems = [...filteredItems];
		newItems.splice(itemIndex, 1);

		dispatch(updateCart(newItems));
		setFilteredItems(newItems);
	};

	return (
		<div className="bg-slate-200 shadow-xl">
			<>
				{title && (
					<div
						onClick={setShowCategory}
						className="font-bold text-md py-3 bg-slate-400 cursor-pointer"
					>
						{title + "(" + title.length + ")"} ⬇️
					</div>
				)}
			</>
			{showCategory &&
				filteredItems.map((item, itemIndex) => (
					<div
						key={item?.card?.info?.id}
						className="px-10 py-5 flex justify-between border-b border-slate-300 pt-5"
					>
						<div className="w-9/12 text-left text-base py-1">
							<div className="font-semibold ">{item?.card?.info?.name}</div>
							<div className="text-sm font-bold py-1">
								₹{item?.card?.info?.price / 100}
							</div>
							{title && (
								<p className="text-xs py-1">{item?.card?.info?.description}</p>
							)}
						</div>

						<div className="">
							{item?.card?.info?.imageId ? (
								<div>
									<img
										className="w-[118px] h-[96px] object-cover rounded-lg"
										src={ITEM_IMAGE + item?.card?.info?.imageId}
										alt="Food"
									></img>
									{title && (
										<button
											onClick={() => {
												handleAddToCart(item);
											}}
											className="bg-white px-5 py-1 text-sm relative bottom-5 rounded-md font-bold border text-green-600 border-green-400 hover:scale-125 duration-150"
										>
											ADD
										</button>
									)}
								</div>
							) : (
								title && (
									<button
										onClick={() => {
											handleAddToCart(item);
										}}
										className="bg-white px-5 py-1 text-sm mr-6 mt-2 rounded-md font-bold border text-green-600 border-green-400 hover:scale-125 duration-150"
									>
										ADD
									</button>
								)
							)}

							{!title && (
								<>
									{item?.card?.info?.imageId ? (
										<>
											<div className="bg-black p-1 flex w-20 items-center rounded text-white font-semibold mx-auto relative bottom-5">
												<button
													onClick={() => {
														handleInc_Dec(itemIndex, false);
													}}
													className="hover:bg-red-500 rounded p-1 w-6"
												>
													-
												</button>
												<span className="mx-2">{item?.totalItems}</span>
												<button
													onClick={() => {
														handleInc_Dec(itemIndex, true);
													}}
													className="hover:bg-green-500 rounded p-1 w-6"
												>
													+
												</button>
											</div>
											<button
												onClick={() => {
													handleRemoveItem(itemIndex);
												}}
												className="font-bold ml-6 hover:text-red-600 duration-150"
											>
												REMOVE
											</button>
										</>
									) : (
										<>
											<div className="bg-black p-1 w-24 rounded text-white font-semibold mx-auto mr-5">
												<button
													onClick={() => {
														handleInc_Dec(itemIndex, false);
													}}
													className="hover:bg-red-500 rounded p-1 w-6"
												>
													-
												</button>
												<span className="mx-2">{item?.totalItems}</span>
												<button
													onClick={() => {
														handleInc_Dec(itemIndex, true);
													}}
													className="hover:bg-green-500 rounded p-1 w-6"
												>
													+
												</button>
											</div>
											<button
												onClick={() => {
													handleRemoveItem(itemIndex);
												}}
												className="font-bold ml-2 mt-3 hover:text-red-600 duration-150"
											>
												REMOVE
											</button>
										</>
									)}
								</>
							)}
						</div>
					</div>
				))}
		</div>
	);
};

export default CategoryItems;
