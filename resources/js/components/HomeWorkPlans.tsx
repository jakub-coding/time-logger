import React from "react";

//Interface Props

const HomeWorkPlans: React.FC = () => {
	//State

	//Methods

	//Template
	return (
		<article className="work-planner col-span-6 mt-8">

			<div className="planner w-full mb-4">
				<div className="title">
					<h1 className="text-pink-800 font-bold text-xl">Working plan:</h1>
				</div>
				<div className="content flex justify-start items-center">
					<ul className="flex justify-start items-center text-gray-100 ml-4">
						<li className="mr-4"><h1><strong>Work week:</strong> Mo - Fr</h1></li>
						<li className="mr-4"><h1><strong>Daily hours:</strong> 8 Hours</h1></li>
						<li className="mr-4"><h1><strong>Weekly hours:</strong> 40 Hours</h1></li>
					</ul>
				</div>
			</div>

			<div className="reality w-full mb-4">
				<div className="title">
					<h1 className="text-pink-800 font-bold text-xl">Working average:</h1>
				</div>
				<div className="content flex justify-start items-center">
					<ul className="flex justify-start items-center text-gray-100 ml-4">
						<li className="mr-4"><h1><strong>Daily hours:</strong> 8 Hours <span className="text-green-500">(+2 Hours)</span></h1></li>
						<li className="mr-4"><h1><strong>Weekly hours:</strong> 40 Hours <span className="text-red-500">(-3 Hours)</span></h1></li>
					</ul>
				</div>
			</div>

		</article>
	);
};

export default HomeWorkPlans;