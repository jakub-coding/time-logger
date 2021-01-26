import React from "react";

//Import Layout
import MasterLayout from "../layouts/MasterLayout";

//Import ChildComponents
import HomeStartControls from "../components/HomeStartControls";
import HomeWorkStats from "../components/HomeWorkStats";
import HomeWorkPlans from "../components/HomeWorkPlans";

//Interface Props
interface Props {
	user: any; //eslint-disable-line
	userLogs: any; //eslint-disable-line
	userLastLog: any;
	confirmationHandle: string;
}

const Home: React.FC<Props> = props => {
	//Extracting Props to different variables
	const {user, userLastLog, userLogs} = props;

	//Template
	return (
		<MasterLayout user={user} title="Dashboard">
			<div className="grid grid-cols-6 gap-4">
				<HomeStartControls
					userData={user}
					userLastLog={userLastLog}
				/>
				<HomeWorkStats user={user} userLogs={userLogs} />
				<HomeWorkPlans user={user}/>
			</div>
		</MasterLayout>
	);
};

export default Home;