import React, {useEffect, useState} from "react";
import AsideNavigation from "../components/AsideNavigation";
import UserConfirmation from "../components/UserConfirmation";

//Interface Props
interface Props {
	title: string,
	children: any, //eslint-disable-line
	user?: any, //eslint-disable-line
}

const MasterLayout: React.FC<Props> = props => {
	const {title, children, user} = props;
	//State
	const [showConfirmation, setShowConfirmation] = useState(false);

	//Methods

	const confirmationHandle = (accepted: boolean) :boolean => {
		if (accepted) {
			console.log('yey Event has been accepted :-D')
			setShowConfirmation(false);
			return true;
		} else {
			console.log('ou no event has been canceled')
			setShowConfirmation(false);
			return false;
		}
	}

	//Template
	return (
		<main className="w-full min-h-screen grid grid-cols-4 bg-gray-800">

			<AsideNavigation user={user} />

			<section className="col-span-3 p-16">

				<article className="page-title mb-16 text-center bg-gray-900 p-16 rounded">
					<h1 className="text-6xl text-gray-100">{title}</h1>
				</article>

				<article className="page-content">
					{children}
				</article>

			</section>

			{ showConfirmation && (
				<UserConfirmation confirmationHandle={confirmationHandle}/>
			)}



		</main>
	);
};

export default MasterLayout;