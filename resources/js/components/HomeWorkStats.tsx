import React, {useEffect, useState} from "react";
import MomentJS from "moment";

//Interface Props
interface Props {
	user: any,
	userLogs?: any,
}


const HomeWorkStats: React.FC<Props> = props => {
	const {user, userLogs} = props
	//State
	const [dayLogs, setDayLogs] = useState<any[]>([])
	const [weekLogs, setWeekLogs] = useState<any[]>([]);
	const [monthLogs, setMonthLogs] = useState<any[]>([]);
	const [yearLogs, setYearLogs] = useState<any[]>([]);

	//Methods
	useEffect(() => {
		getThisWeekLogs();
		getThisDayLogs();
		getThisMonthLogs();
		getThisYearLogs();
	}, [])

	const getThisDayLogs = () => {
		let dateNow = new Date();
		let getThisDay = dateNow.getDate();
		let dayLogsOp: any = []

		userLogs.map((item: any) => {
			let itemDay = new Date(item.created_at).getDate();

			if (itemDay === getThisDay) {
				dayLogsOp.push(item)
			}
		})

		setDayLogs(dayLogsOp);
	}

	const getThisWeekLogs = () => {
		let dateNow = new Date();
		let getThisWeek = MomentJS(dateNow).week();
		let weekLogsOp: any = []

		userLogs.map((item: any) => {
			let itemWeek = MomentJS(item.created_at).week();

			if(itemWeek === getThisWeek) {
				weekLogsOp.push(item)
			}
		})

		setWeekLogs(weekLogsOp);
	}

	const getThisMonthLogs = () => {
		let dateNow = new Date();
		let getThisMonth = dateNow.getMonth();
		let monthLogsOp: any = [];

		userLogs.map((item: any) => {
			let itemMonth = new Date(item.created_at).getMonth();

			if (itemMonth === getThisMonth) {
				monthLogsOp.push(item);
			}
		})

		setMonthLogs(monthLogsOp);
	}

	const getThisYearLogs = () => {
		let dateNow = new Date();
		let getThisYear = dateNow.getFullYear();
		let yearsLogsOp: any = [];

		userLogs.map((item: any) => {
			let itemYear = new Date(item.created_at).getFullYear()

			if (itemYear === getThisYear) {
				yearsLogsOp.push(item)
			}
		})

		setYearLogs(yearsLogsOp);
	}

	const calculateTime = (logsArray: any[]) => {
		let timeContainer = 0;

		logsArray.map(item => {
			let startDate = new Date(Date.parse(item.started_at)).getTime()
			let endDate = new Date(Date.parse(item.end_at)).getTime()

			if (endDate > 0) {
				let timeDifference = (endDate - startDate);
				timeContainer = timeContainer + timeDifference;
			}

		})
		let resultTime = new Date(timeContainer);
		let daysHours = (resultTime.getDate() - 1) * 24
		let getHours = resultTime.getHours() - 1
		let resultHours = daysHours + getHours

		return resultHours + " hours and " + resultTime.getMinutes() + " minutes";
	}


	//Template
	return (
		<article className="work-stats col-span-3 py-4 px-8 border-l-2 border-gray-100">
			<h1 className="list-title">Base Stats:</h1>
			<ul className="stat-list">
				<li className="stat-list-item"><p className="text-sm"><strong className="text-gray-100 text-md">Today: </strong>{calculateTime(dayLogs)}</p></li>
				<li className="stat-list-item"><p className="text-sm"><strong className="text-gray-100 text-md">This Week: </strong>{calculateTime(weekLogs)}</p></li>
				<li className="stat-list-item"><p className="text-sm"><strong className="text-gray-100 text-md">This Month: </strong>{calculateTime(monthLogs)}</p></li>
				<li className="stat-list-item"><p className="text-sm"><strong className="text-gray-100 text-md">This Year: </strong>{calculateTime(yearLogs)}</p></li>
			</ul>

			<h1 className="list-title">Summary Stats:</h1>
			<ul className="stat-list">
				<li className="stat-list-item"><p className="text-sm"><strong className="text-gray-100 text-md">Hours:</strong> {calculateTime(userLogs)}</p></li>
			</ul>
		</article>
	);
};

export default HomeWorkStats;