import React, {useEffect, useState} from "react";
import MasterLayout from "../layouts/MasterLayout";
import WorkOverviewItem from "../components/WorkOverviewItem";

//Interface Props
interface Props {
	user: any //eslint-disable-line
	userLogs: any //eslint-disable-line
}

const WorkOverview: React.FC<Props> = props => {
	const {user, userLogs} = props
	//State
	const [daysLogs, setDaysLogs] = useState<any[]>([]);

	//Methods
	useEffect(() => {
		sortDaysHandle();
	}, [])



	const sortDaysHandle = () => {
		let newLogsDateArray:string[] = [];
		let newDaysArray:any[] = [];


		//loop user logs array, get item date and pass it to newLogsDateArray array
		userLogs.map( (item: any) => {
			let logDay: string = item.created_at.split('T')[0];
			newLogsDateArray = [...newLogsDateArray, logDay]
		})

		//filter unique values from newLogsDateArray
		let uniqueDaysArray = newLogsDateArray.filter( (value, index, self) => {
			return self.indexOf(value) === index;
		});

		//from uniqueDaysArray make object an pass it to new array
		uniqueDaysArray.map(item => {
			let day = {
				date: item,
				logs: [],
			}

			newDaysArray = [...newDaysArray, day]
		})

		newDaysArray.map((item: any) => {

			userLogs.map((log: any) => {
				let logDay: string = log.created_at.split('T')[0];

				if(item.date === logDay) {
					item.logs = [...item.logs, log]
				}
			});

		})

		setDaysLogs(newDaysArray);
	}



	//Template
	return (
		<MasterLayout user={user} title="Work Overview">
			<ul className={! userLogs ? "hidden" : "block"}>
				{daysLogs.map((item, key) => (
					<WorkOverviewItem key={key} user={user} logItem={item} />
				))}
			</ul>
			{
				userLogs.length === 0 && (
					<h1 className="text-gray-100 text-xl">User have no Logs yet ! Please do something :-)</h1>
				)
			}

		</MasterLayout>
	);
};

export default WorkOverview;