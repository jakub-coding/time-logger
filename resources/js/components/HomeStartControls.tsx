import React, {useEffect, useState} from "react";

// Import Children
import HomeStartTimer from "./HomeStartTimer";

// Import Dependencies
import axios from "axios";

//Interface Props
interface Props {
	userData: any, //eslint-disable-line
	userLastLog?: any,
}

const HomeStartControls: React.FC<Props> = props => {
	const {userData, userLastLog} = props;

	//State
	const [statusOperator, setStatusOperator] = useState(Boolean);
	const [lastLog, setLastLog] = useState<any>(userLastLog);

	//Methods
	useEffect(() => {
		defineStatus();
	}, []);

	const defineStatus = () => {
		if(userLastLog) {
			if(lastLog.log_status) {
				setStatusOperator(false);
			} else {
				setStatusOperator(true);
			}
		} else {
			setStatusOperator(true);
		}
	};

	const statusOperatorHandle = () => {
		if (statusOperator) {
			setStatusOperator(false);
		}
		if (! statusOperator) {
			setStatusOperator(true);
		}
	};

	const onButtonClick = () => {
		if(window.confirm('really bro ?')) {
			statusOperatorHandle();
			if(statusOperator) {
				emitDataHandle();
			} else {
				updateDataHandle();
			}
		}
	};

	const updateDataHandle = () => {
		let dataId = lastLog.id;

		const dataPayload = {
			log_status: statusOperator,
		}

		axios.patch("/api/logger/"+dataId, dataPayload).then(response => {
			setLastLog(response.data.data_last_log);
		}).catch(error => {
			console.error(error);
		})

	}

	const emitDataHandle = () => {
		const dataPayload = {
			user_id: userData.id,
			log_status: statusOperator,
		};

		axios.post("/api/logger", dataPayload)
			.then(response => {
				setLastLog(response.data.data_last_log);
			}).catch(error => {
				console.error(error)
		})
	};

	//Template
	return (
		<article className="col-span-3 start-controls flex flex-col justify-start items-center p-4">
			<h1 className="text-4xl text-gray-100 mb-6 text-center">Click to {statusOperator? "Start" : "Stop"}</h1>
			<button onClick={onButtonClick} className={statusOperator ? "control-button-green" : "control-button-red"}>
				{statusOperator? "Start" : "Stop"}
			</button>
			<HomeStartTimer lastLog={lastLog} />
		</article>
	);
};

export default HomeStartControls;