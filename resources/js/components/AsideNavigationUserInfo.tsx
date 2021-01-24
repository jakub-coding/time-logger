import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import Moment from "react-moment";

//Interface Props
interface Props {
	user: any; //eslint-disable-line
}

const AsideNavigationUserInfo: React.FC<Props> = props => {
	const {user} = props;
	//State

	//Methods

	//Template
	return (
		<div className="user-info flex flex-col justify-start items-center mb-8">
			<svg className="w-32 h-32 text-gray-100 mb-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
					d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
			</svg>
			<h1 className="text-gray-100 text-xl">{user.name}</h1>
			<nav className="user-nav mb-4">
				<InertiaLink className="text-sm text-gray-500 mr-4" href="/user-profile">Profile</InertiaLink>
				<InertiaLink className="text-sm text-gray-500" href="/logout" method="post" as="button" type="button">Logout</InertiaLink>
			</nav>
			<p className="text-gray-100 text-md">
				<Moment format="DD. MM. YYYY">
					{Date()}
				</Moment>
			</p>
		</div>
	);
};

export default AsideNavigationUserInfo;