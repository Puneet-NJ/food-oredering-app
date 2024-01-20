import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../Hooks/useFetchRestaurantMenu";
import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import ResInfoMenu from "./ResInfo-Menu";
import ShimmerResMenu from "./Shimmer-ResMenu";

const RestaurantMenu = () => {
	const { id } = useParams();
	useFetchRestaurantMenu(id);

	const restaurant = useSelector(
		(store) => store.restaurants.restaurantInMenuPage
	);
	const categoryList = useSelector((store) => store.restaurants.restaurantMenu);

	const [showCategory, setShowCategory] = useState(0);

	if (!restaurant) return <ShimmerResMenu />;

	const {
		name,
		cuisines,
		avgRating,
		totalRatingsString,
		costForTwoMessage,
		sla,
	} = restaurant;

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
				{categoryList.map((category, index) => {
					return (
						<div className="mt-3" key={category?.card?.card?.id}>
							{
								<CategoryItems
									key={category?.card?.card?.key}
									showCategory={showCategory === index}
									setShowCategory={() => {
										showCategory === index
											? setShowCategory()
											: setShowCategory(index);
									}}
									items={category?.card?.card?.itemCards}
									title={category?.card?.card?.title}
									index={index}
								/>
							}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantMenu;
