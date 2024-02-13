import { useEffect } from "react";
import { MENU } from "../Utils/mockData";
import { useDispatch } from "react-redux";
import {
	addRestaurantMenu,
	addRestaurantInMenuPage,
} from "../Utils/RestaurantsSlice";

const useFetchRestaurantMenu = (id) => {
	const dispatch = useDispatch();

	const fetchMenu = async () => {
		const data = await fetch(
			`https://cors-anywhere.herokuapp.com/${MENU + id}`
		);
		const json = await data.json();

		dispatch(addRestaurantInMenuPage(json?.data?.cards?.[0]?.card?.card?.info));

		dispatch(
			addRestaurantMenu(
				json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
			)
		);
	};

	useEffect(() => {
		fetchMenu();
	}, []);
};

export default useFetchRestaurantMenu;
