import React from "react";
import { CDN_IMAGE } from "../Utils/mockData";

const RestaurantCard = (props) => {
	const { name, avgRating, imageId, cuisines, deliveryTime } = props;

	return (
		<div className="border p-5 m-4 rounded-lg cursor-pointer hover:border-gray-500 hover:scale-95 duration-300">
			<img
				className="w-[328px] h-[248px] object-cover rounded-lg"
				src={CDN_IMAGE + imageId}
				alt="Restaurant icon"
			></img>
			<div className="flex justify-between text-sm mt-3">
				<div>
					<h1 className="font-bold text-base line-clamp-1 w-60">{name}</h1>
					<div className="w-40 line-clamp-1 mt-1">{cuisines.join(", ")}</div>
				</div>
				<div>
					<div>{avgRating} ★</div>
					<div className="mt-1">{deliveryTime} mins</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
