import React, {useEffect, useState} from "react";

//Import Layout
import MasterLayout from "../layouts/MasterLayout";

//Import ChildComponents
import HomeStartControls from "../components/HomeStartControls";
import HomeWorkStats from "../components/HomeWorkStats";
import HomeWorkPlans from "../components/HomeWorkPlans";

//Interface Props
interface Props {
	user: any; //eslint-disable-line
	last_log: any; //eslint-disable-line
}

const Home: React.FC<Props> = props => {
	//Extracting Props to different variables
	const {user, last_log} = props;

	//State
	const [logStatus, setLogStatus] = useState("");

	//Methods
	useEffect(() => {
		// console.log(user, last_log);
		checkLastLog();
	}, []);

	const checkLastLog = () => {
		if (last_log.log_status === "stop") {
			setLogStatus("start");
		}
		if (last_log.log_status === "start") {
			setLogStatus("stop");
		}
	};

	//Template
	return (
		<MasterLayout user={user} title="Work-logger Dashboard">
			<div className="grid grid-cols-6 gap-4">
				<HomeStartControls logStatus={logStatus} />
				<HomeWorkStats />
				<HomeWorkPlans />
			</div>
		</MasterLayout>
	);
};

export default Home;