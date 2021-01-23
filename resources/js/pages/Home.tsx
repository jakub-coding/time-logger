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
	last_records: any; //eslint-disable-line
	confirmationHandle: string;
	last_log_php: any;
}

const Home: React.FC<Props> = props => {
	//Extracting Props to different variables
	const {user, last_log_php} = props;

	//Template
	return (
		<MasterLayout user={user} title="Work-logger Dashboard">
			<div className="grid grid-cols-6 gap-4">
				<HomeStartControls
					userData={user}
					lastLogPhp={last_log_php}
				/>
				<HomeWorkStats />
				<HomeWorkPlans />
			</div>
		</MasterLayout>
	);
};

export default Home;