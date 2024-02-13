import React from "react";
import {
	ABOUT_CUSTOMER,
	ABOUT_DEALS,
	ABOUT_FLOAVORFUL,
	ABOUT_MAIN_IMAGE,
	ABOUT_OUR_STORY,
	ABOUT_QUALITY,
	ABOUT_USER_EXPERIENCE,
} from "../Utils/mockData";

const About = () => {
	return (
		<div className="px-32 mt-16">
			<div className="flex justify-between items-center w-full">
				<h1 className="text-[90px] text-lime-500">
					Welcome to <div className="text-black">Foodalix</div>
				</h1>
				<img className="w-[500px]" src={ABOUT_MAIN_IMAGE} alt="food"></img>
			</div>

			<p className="mt-20 font-semibold bg-slate-200 px-10 py-5 shadow-xl">
				At Foodalix, we are driven by a relentless passion for delivering
				delightful dining experiences right to your fingertips. Our journey
				began with a simple yet profound vision - to revolutionize the way you
				indulge in your favorite meals. Whether you're yearning for comfort
				food, exploring exotic global cuisines, or seeking wholesome
				alternatives, we've got you covered!
			</p>

			<div className="mt-20 mb-20">
				<h1 className="text-[90px] text-center">Our Story</h1>
				<div className="mt-7 flex bg-slate-200 px-7 py-5 items-center shadow-2xl">
					<img className="w-[400px] mr-10" src={ABOUT_OUR_STORY} alt="team" />
					<p className="text-lg">
						Founded in 2022, "Foodalix" started as a small team of food
						enthusiasts who set out to bridge the gap between discerning food
						lovers and the culinary wonders of our vibrant city. With time, our
						ranks swelled, and we transformed into a devoted tribe of foodies,
						tech wizards, and customer service aficionados, all united by a
						singular purpose - to create a seamless and unparalleled food
						ordering platform.
					</p>
				</div>
			</div>

			<div className="mb-28 mt-28">
				<h1 className="text-[90px] text-center">What sets us apart</h1>

				<div className="mt-7 flex bg-slate-200 px-7 py-5 items-center shadow-2xl">
					<img
						className="w-[400px] mr-10"
						src={ABOUT_FLOAVORFUL}
						alt="flavors"
					/>
					<div>
						<h2 className="text-3xl mb-7 font-semibold">
							Flavorful Culinary Odyssey
						</h2>
						<p className="text-lg">
							Our platform boasts an impressive network of restaurants and
							eateries, serving up an eclectic array of cuisines to satisfy
							every craving and palate.
						</p>
					</div>
				</div>

				<div className="mt-16 flex bg-slate-200 px-7 py-5 items-center shadow-2xl">
					<div>
						<h2 className="text-3xl mb-7 font-semibold">
							Seamless User Experience
						</h2>
						<p className="text-lg">
							We've meticulously designed our website with your convenience in
							mind. Navigating through our menu, placing an order, and tracking
							its status is not just efficient but also a delightfully
							user-friendly experience.
						</p>
					</div>
					<img
						className="w-[400px] mr-10"
						src={ABOUT_USER_EXPERIENCE}
						alt="customer support"
					/>
				</div>

				<div className="mt-16 flex bg-slate-200 px-7 py-5 items-center shadow-2xl">
					<img className="w-[400px] mr-10" src={ABOUT_DEALS} alt="deals" />
					<div>
						<h2 className="text-3xl mb-7 font-semibold">
							Exclusive Deals and Delights
						</h2>
						<p className="text-lg">
							At "Foodclix" we take pleasure in spoiling our users with
							exclusive deals, discounts, and loyalty rewards, making your
							dining experiences even more indulgent.
						</p>
					</div>
				</div>

				<div className="mt-16 flex bg-slate-200 px-7 py-5 items-center shadow-2xl">
					<div>
						<h2 className="text-3xl mb-7 font-semibold">Quality Assurance</h2>
						<p className="text-lg">
							We hold ourselves to the most rigorous standards, ensuring that
							the food you order is crafted with the freshest ingredients and
							promptly delivered to your doorstep.
						</p>
					</div>
					<img
						className="w-[400px] mr-10"
						src={ABOUT_QUALITY}
						alt="customer support"
					/>
				</div>

				<div className="mt-16 flex bg-slate-200 px-7 py-5 items-center shadow-2xl">
					<img
						className="w-[400px] mr-10"
						src={ABOUT_CUSTOMER}
						alt="customer support"
					/>
					<div>
						<h2 className="text-3xl mb-7 font-semibold">
							Customer-Centric Support
						</h2>
						<p className="text-lg">
							Our dedicated customer support team is at your service round the
							clock. Whether you have a query or need assistance, we're just a
							call or email away, committed to enhancing your culinary journey.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
