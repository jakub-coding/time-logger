import React from "react";

//Interface Props

const HomeWorkStats: React.FC = () => {
	//State

	//Methods

	//Template
	return (
		<article className="work-stats col-span-3 py-4 px-8 border-l-2 border-gray-100">
			<h1 className="list-title">Base Stats:</h1>
			<ul className="stat-list">
				<li className="stat-list-item"><p><strong>Today:</strong> 3 Hours</p></li>
				<li className="stat-list-item"><p><strong>This Week:</strong> 26 Hours</p></li>
				<li className="stat-list-item"><p><strong>This Month:</strong> 126 Hours</p></li>
				<li className="stat-list-item"><p><strong>This Year:</strong> 365 Hours</p></li>
			</ul>

			<h1 className="list-title">Summary Stats:</h1>
			<ul className="stat-list">
				<li className="stat-list-item"><p><strong>Hours:</strong> 4322 Hours</p></li>
				<li className="stat-list-item"><p><strong>Days (pure Time):</strong> 76 Days</p></li>
				<li className="stat-list-item"><p><strong>Month (pure Time):</strong> 2 Month</p></li>
			</ul>
		</article>
	);
};

export default HomeWorkStats;