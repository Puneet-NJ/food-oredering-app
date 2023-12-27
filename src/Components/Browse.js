import { useSelector } from "react-redux";
import useFetchRestaurants from "../Hooks/useFetchRestaurants";
import RestaurantCard from "./RestaurantCard";

const Browse = () => {
	useFetchRestaurants();

	const restaurants = useSelector((store) => store.restaurants.restaurants);

	if (!restaurants) return;
	console.log(restaurants?.[0]);

	return (
		<div className="flex flex-wrap justify-center my-20">
			{restaurants.map((restaurant) => (
				<RestaurantCard
					key={restaurant?.info?.id}
					name={restaurant?.info?.name}
					avgRating={restaurant?.info?.avgRating}
					imageId={restaurant?.info?.cloudinaryImageId}
					cuisines={restaurant?.info?.cuisines}
					deliveryTime={restaurant?.info?.sla?.deliveryTime}
				/>
			))}
		</div>
	);
};

export default Browse;
