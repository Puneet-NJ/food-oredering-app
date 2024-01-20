import React from "react";
import { footerImageLinks } from "../Utils/mockData";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-black text-white px-16 py-9 flex items-center justify-between">
			<div className="w-56">
				<h1 className="text-lime-400 text-2xl font-semibold">About Us</h1>

				<p className="mt-4">
					Delicious meals delivered to your door. Order now! Eat well,
					effortlessly.
				</p>

				<div className="flex mt-4">
					{footerImageLinks.map((link, index) => (
						<a
							target="_blank"
							key={index}
							rel="noreferrer"
							href={link.toLink}
							className="mr-4 hover:scale-90 duration-200"
						>
							<img
								className="w-12 rounded-full"
								src={link.imageLink}
								alt="github"
							/>
						</a>
					))}
				</div>
			</div>

			<div className="w-[350px]">
				<ul className="flex justify-between">
					<li className="hover:text-gray-400 duration-150">
						<Link to="/browse">Home</Link>
					</li>
					<li className="hover:text-gray-400 duration-150">
						<Link to="/browse/about">About Us</Link>
					</li>
					<li className="hover:text-gray-400 duration-150">
						<Link to="/browse/faq">FAQ</Link>
					</li>
					<li className="hover:text-gray-400 duration-150">
						<Link to="/browse/cart">Cart-(0 Items)</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
