import { useEffect } from "react";
import { RESTAURANTS } from "../Utils/mockData";
import { useDispatch } from "react-redux";
import { addRestaurants } from "../Utils/RestaurantsSlice";

const useFetchRestaurants = () => {
	const dispatch = useDispatch();

	const fetchRestaurants = async () => {
		const data = await fetch(RESTAURANTS);
		const json = await data.json();
		dispatch(
			addRestaurants(
				json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
			)
		);
	};

	useEffect(() => {
		fetchRestaurants();
	}, []);
};

export default useFetchRestaurants;
