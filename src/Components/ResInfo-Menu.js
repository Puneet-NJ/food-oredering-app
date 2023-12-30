import React from "react";
import timeImg from "../images/clock_5279650.png";

const ResInfoMenu = (props) => {
	const {
		name,
		cuisines,
		avgRating,
		totalRatingsString,
		costForTwoMessage,
		deliveryTime,
	} = props;

	return (
		<div>
			<div className="flex justify-between px-7 py-5 border-b border-b-black border-dashed">
				<div>
					<div className="font-bold text-lg p-1">{name}</div>
					<div className="text-sm mt-1">{cuisines.join(", ")}</div>
				</div>
				<div className="border px-1 rounded flex flex-col justify-center">
					<div className="text-sm border-b text-green-800 py-1 font-bold">
						{avgRating} ★
					</div>
					<div className="text-xs py-2">{totalRatingsString}</div>
				</div>
			</div>
			<div className="flex px-7 py-4 font-bold">
				<div className="flex items-center">
					<img className="w-4 inline-block" src={timeImg} alt="Delivery" />
					<span> {deliveryTime} MINS</span>
				</div>
				<div className="ml-20">{costForTwoMessage}</div>
			</div>
		</div>
	);
};

export default ResInfoMenu;
