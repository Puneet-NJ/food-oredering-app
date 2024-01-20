import React from "react";

const Question = ({ question, answer, showIndex, setShowIndex }) => {
	return (
		<div className="bg-slate-200 my-4">
			<div
				onClick={setShowIndex}
				className="text-gray-800 text-xl bg-slate-300 py-2 cursor-pointer"
			>
				{question}
			</div>
			{showIndex && (
				<div className="text-gray-500 px-5 py-2 transition">{answer}</div>
			)}
		</div>
	);
};

export default Question;
