import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";
import AsideNavigation from "../components/AsideNavigation";

//Interface Props
interface Props {
	title: string,
	children: any, //eslint-disable-line
	user: any, //eslint-disable-line
}

const MasterLayout: React.FC<Props> = props => {
	const {title, children, user} = props;
	//State

	//Methods

	//Template
	return (
		<main className="w-full min-h-screen grid grid-cols-4 bg-gray-800">

			<AsideNavigation user={user} />

			<section className="col-span-3 p-16">

				<article className="page-title mb-16">
					<h1 className="text-6xl text-gray-100">{title}</h1>
				</article>

				<article className="page-content">
					{children}
				</article>

			</section>

		</main>
	);
};

export default MasterLayout;