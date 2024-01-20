import { useSelector } from "react-redux";
import useFetchRestaurants from "../Hooks/useFetchRestaurants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Browse = () => {
	const [searchRes, setSearchRes] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	useFetchRestaurants();

	const restaurants = useSelector((store) => store.restaurants.restaurants);
	useEffect(() => {
		setFilteredRestaurants(restaurants);
	}, [restaurants]);

	if (!restaurants || !filteredRestaurants) return;

	const handleSearchRestaurant = () => {
		const arr = restaurants.filter((restaurant) =>
			restaurant?.info?.name.toLowerCase().includes(searchRes.toLowerCase())
		);
		setFilteredRestaurants(arr);
	};

	const handleSortDeliveryTime = () => {
		let arr = restaurants;

		arr = arr
			.slice()
			.sort((a, b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime);

		setFilteredRestaurants(arr);
	};

	const handleSortTopRatedRes = () => {
		const arr = restaurants.filter(
			(restaurant) => restaurant?.info?.avgRating > 4.4
		);

		setFilteredRestaurants(arr);
	};

	const handleSortNearestRes = () => {
		let arr = restaurants;
		arr = arr
			.slice()
			.sort(
				(a, b) => a?.info?.sla?.lastMileTravel - b?.info?.sla?.lastMileTravel
			);

		setFilteredRestaurants(arr);
	};

	const handleSortCost = (lowToHigh) => {
		let arr = restaurants;
		arr = arr.slice().sort((a, b) => {
			return lowToHigh
				? a?.info?.costForTwo.slice(1, 5) - b?.info?.costForTwo.slice(1, 5)
				: b?.info?.costForTwo.slice(1, 5) - a?.info?.costForTwo.slice(1, 5);
		});

		setFilteredRestaurants(arr);
	};

	return (
		<div className="my-20">
			<form
				className="flex justify-center"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					value={searchRes}
					onChange={(e) => {
						setSearchRes(e.target.value);
					}}
					className="shadow-lg py-2 px-7 w-80 border border-black rounded mr-1 rounded-s-3xl outline-none"
					placeholder="Search for restaurants"
				></input>
				<button
					onClick={handleSearchRestaurant}
					className="shadow-lg py-2 px-5 border border-black bg-black rounded text-white rounded-e-3xl hover:bg-gray-600 hover:scale-95 duration-300"
				>
					Search
				</button>
			</form>

			<div className="ml-32 mt-10">
				<div>
					<h1 className="font-semibold text-lg mb-3">Sort by:</h1>
				</div>

				<button
					onClick={handleSortDeliveryTime}
					className="shadow-2xl rounded-md bg-black text-white px-4 py-2 hover:bg-gray-600 hover:scale-95 duration-300"
				>
					Delivery Time
				</button>

				<button
					onClick={handleSortTopRatedRes}
					className="shadow-2xl ml-7 rounded-md bg-black text-white px-4 py-2 hover:bg-gray-600 hover:scale-95 duration-300"
				>
					Top Rated Restaurants(&gt;4.4)
				</button>

				<button
					onClick={handleSortNearestRes}
					className="shadow-2xl ml-7 rounded-md bg-black text-white px-4 py-2 hover:bg-gray-600 hover:scale-95 duration-300"
				>
					Nearest Restaurants
				</button>

				<button
					onClick={() => {
						handleSortCost(true);
					}}
					className="shadow-2xl ml-7 rounded-md bg-black text-white px-4 py-2 hover:bg-gray-600 hover:scale-95 duration-300"
				>
					Cost low to high
				</button>

				<button
					onClick={() => {
						handleSortCost(false);
					}}
					className="shadow-2xl ml-7 rounded-md bg-black text-white px-4 py-2 hover:bg-gray-600 hover:scale-95 duration-300"
				>
					Cost high to low
				</button>
			</div>

			<div className="flex flex-wrap justify-center mt-10">
				{filteredRestaurants.map((restaurant) => (
					<div className="p-6" key={restaurant?.info?.id}>
						<Link
							to={"/browse/restaurant/" + restaurant?.info?.id}
							className="cursor-default"
						>
							<RestaurantCard
								name={restaurant?.info?.name}
								avgRating={restaurant?.info?.avgRating}
								imageId={restaurant?.info?.cloudinaryImageId}
								cuisines={restaurant?.info?.cuisines}
								costForTwo={restaurant?.info?.costForTwo}
								deliveryTime={restaurant?.info?.sla?.deliveryTime}
								distance={restaurant?.info?.sla?.lastMileTravel}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Browse;
