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
		const data = await fetch(MENU + id);
		const json = await data.json();

		// console.log(json?.data?.cards?.[0]?.card?.card?.info);
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
