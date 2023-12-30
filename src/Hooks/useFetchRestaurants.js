import { useEffect } from "react";
import { RESTAURANTS, RESTAURANTS2 } from "../Utils/mockData";
import { useDispatch } from "react-redux";
import { addRestaurants } from "../Utils/RestaurantsSlice";

const useFetchRestaurants = () => {
	const dispatch = useDispatch();

	const fetchRestaurants = async () => {
		const data = await fetch(RESTAURANTS);
		const json = await data.json();

		const data2 = await fetch(RESTAURANTS2);
		const json2 = await data2.json();

		dispatch(
			addRestaurants(
				json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
			)
		);
	};

	useEffect(() => {
		fetchRestaurants();
	}, []);
};

export default useFetchRestaurants;
