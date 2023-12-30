import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../Hooks/useFetchRestaurantMenu";
import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import ResInfoMenu from "./ResInfo-Menu";

const RestaurantMenu = () => {
	const [showCategory, setShowCategory] = useState(true);
	const { id } = useParams();
	useFetchRestaurantMenu(id);

	const restaurant = useSelector(
		(store) => store.restaurants.restaurantInMenuPage
	);
	const categoryList = useSelector((store) => store.restaurants.restaurantMenu);
	if (!categoryList || !restaurant) return;

	const {
		name,
		cuisines,
		avgRating,
		totalRatingsString,
		costForTwoMessage,
		sla,
	} = restaurant;

	const handleAccordian = () => {
		setShowCategory(!showCategory);
	};

	return (
		<div className="w-7/12 mx-auto text-center my-20">
			<ResInfoMenu
				name={name}
				cuisines={cuisines}
				avgRating={avgRating}
				totalRatingsString={totalRatingsString}
				costForTwoMessage={costForTwoMessage}
				deliveryTime={sla?.deliveryTime}
			/>
			<div className="mt-6">
				{categoryList.map((category) => {
					if (!category?.card?.card?.title) return null;
					return (
						<div className="mt-3">
							<div
								onClick={handleAccordian}
								className="font-bold text-lg py-2 bg-slate-400"
							>
								{category?.card?.card?.title}
							</div>
							{showCategory && (
								<div>
									<CategoryItems items={category?.card?.card?.itemCards} />
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantMenu;
