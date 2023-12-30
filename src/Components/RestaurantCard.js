import React from "react";
import { CDN_IMAGE } from "../Utils/mockData";

const RestaurantCard = (props) => {
	const {
		name,
		avgRating,
		imageId,
		cuisines,
		deliveryTime,
		costForTwo,
		distance,
	} = props;

	return (
		<div className="shadow-lg border p-5 rounded-lg cursor-pointer  hover:scale-95 hover:bg-slate-100 duration-300">
			<img
				className="w-[328px] h-[248px] object-cover rounded-lg"
				src={CDN_IMAGE + imageId}
				alt="Restaurant icon"
			></img>
			<div className="flex justify-betweentext-sm mt-3">
				<div>
					<h1 className="font-bold text-base line-clamp-1 w-60">{name}</h1>
					<div className="w-40 line-clamp-1 mt-1">{cuisines.join(", ")}</div>
				</div>
				<div>
					<div>{avgRating} ★</div>
					<div className="mt-1">{costForTwo}</div>
				</div>
			</div>
			<div className="text-center mt-1 pt-3 text-sm font-semibold border-t-2">
				<div>
					{distance} kms ({deliveryTime} mins)
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
