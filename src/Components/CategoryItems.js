import React from "react";
import { ITEM_IMAGE } from "../Utils/mockData";

const CategoryItems = ({ items }) => {
	if (!items) return;
	// console.log(items?.[0]?.card?.info);
	return (
		<div className=" bg-slate-200 px-10">
			{items.map((item) => (
				<div
					key={item?.card?.info?.id}
					className="flex justify-between border-b border-slate-300 pt-5"
				>
					<div className="w-9/12 text-left text-base py-1">
						<div className="font-semibold ">{item?.card?.info?.name}</div>
						<div className="text-sm font-bold py-1">
							₹{item?.card?.info?.price / 100}
						</div>
						<p className="text-xs py-1">{item?.card?.info?.description}</p>
					</div>

					<div className="">
						{item?.card?.info?.imageId ? (
							<div>
								<img
									className="w-[118px] h-[96px] object-cover rounded-lg"
									src={ITEM_IMAGE + item?.card?.info?.imageId}
									alt="Food"
								></img>
								<button className="bg-white px-5 py-1 text-sm relative bottom-5 rounded-md font-bold border text-green-600 border-green-400 hover:scale-125 duration-150">
									ADD
								</button>
							</div>
						) : (
							<button className="bg-white px-5 py-1 text-sm mr-6 mt-2 rounded-md font-bold border text-green-600 border-green-400 hover:scale-125 duration-150">
								ADD
							</button>
						)}
					</div>
				</div>
			))}
		</div>
	);
};

export default CategoryItems;
