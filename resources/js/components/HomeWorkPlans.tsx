import React, {useEffect} from "react";

//Interface Props
interface Props {
	user: any,
}


const HomeWorkPlans: React.FC<Props> = props => {
	const { user } = props;

	//Template
	return (
		<article className="work-planner col-span-6 mt-8">

			<div className="reality w-full mb-4">
				<div className="title">
					<h1 className="text-pink-800 font-bold text-xl">Work plan:</h1>
				</div>
				<div className="content flex justify-start items-center">
					<ul className="flex justify-start items-center text-gray-100 ml-4">
						<li className="mr-4"><h1><strong>Work week:</strong> Mo-Fr </h1></li>
						<li className="mr-4"><h1><strong>Daily:</strong> {user.daily_hours_plan} Hours </h1></li>
						<li className="mr-4"><h1><strong>Weekly:</strong> {user.weekly_hours_plan} Hours </h1></li>
					</ul>
				</div>
			</div>

		</article>
	);
};

export default HomeWorkPlans;