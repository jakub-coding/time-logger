import React, {useEffect} from "react";
import MasterLayout from "../layouts/MasterLayout";

//Interface Props
interface Props {
	authUser: any
}

const UserProfile: React.FC<Props> = props => {
	const { authUser } = props;

	//State
	useEffect(() => {
		console.log(authUser);
	}, [])



	//Template
	return (
		<MasterLayout user={authUser} title="User Profile">
			<h1>User Profile</h1>
		</MasterLayout>
	);
};

export default UserProfile;