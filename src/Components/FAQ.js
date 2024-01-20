import React, { useState } from "react";
import { faqs } from "../Utils/mockData";
import Question from "./Question";

const FAQ = () => {
	const [showIndex, setShowIndex] = useState(0);

	return (
		<div className="w-[70%] mx-auto text-center mt-16 mb-28">
			<h1 className="mt-10 font-semibold text-4xl">
				Frequently Asked Questions
			</h1>
			<h2 className="text-2xl text-gray-600 my-10">
				Have Questions? We are here to help
			</h2>

			{faqs.map((item, index) => (
				<Question
					key={index}
					question={item.question}
					answer={item.answer}
					showIndex={showIndex === index}
					setShowIndex={() => {
						showIndex === index ? setShowIndex() : setShowIndex(index);
					}}
				/>
			))}
		</div>
	);
};

export default FAQ;
