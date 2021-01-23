import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import AsideNavigationUserInfo from "./AsideNavigationUserInfo";

//Interface Props
interface Props {
	user: any; //eslint-disable-line
}

const AsideNavigation: React.FC<Props> = props => {
	const {user} = props;
	//State

	//Methods

	//Template
	return (
		<aside className="p-16">
			<AsideNavigationUserInfo user={user} />

			<nav className="primary-navigation flex flex-col justify-start items-center mb-8">
				<InertiaLink className="primary-nav-link" href="/">Dashboard</InertiaLink>
				<InertiaLink className="primary-nav-link" href="/overview">Log overview</InertiaLink>
			</nav>

			<nav className="secondary-navigation flex flex-col justify-start items-center mb-8">
				<InertiaLink className="text-gray-500" href="#">About</InertiaLink>
				<InertiaLink className="text-gray-500" href="#">Contact Support</InertiaLink>
			</nav>

			<p className="text-xs text-gray-900 text-center">ver. 1.0 &copy;2021</p>
		</aside>
	);
};

export default AsideNavigation;