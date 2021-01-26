import React, {useEffect} from 'react'
import Moment from "react-moment";
import MomentJS from "moment";

//Interface Props
interface Props {
	logItem: any,
	user: any,
}

const WorkOverviewItem: React.FC<Props> = props => {
	const {logItem, user} = props;

	//Methods
	useEffect(() => {
		hoursSummaryHandle()
	}, [])


	const formatDate = (input: string) => {
		if (input) {
			return MomentJS(input).format("HH:mm");
		} else {
			return "-- : --";
		}
	}

	const timeFormat = (input: number) : string => {
		if (input < 10) {
			return "0" + input.toString();
		} return input.toString();
	}

	const calculateHours = (logIn:string, logOut:string) => {
		let inTime: any = new Date(Date.parse(logIn));
		let outTime: any = new Date(Date.parse(logOut));

		let pureInTime = inTime.getTime();
		let pureOutTime = outTime.getTime();

		let differenceTime = new Date(0);
		differenceTime.setMilliseconds(pureOutTime - pureInTime);

		if (logOut) {
			return differenceTime
		} else return null;
	}

	const hoursSummaryHandle = () => {
		let workedHours = 0;

		logItem.logs.map((item: any) => {
			let differenceTime = calculateHours(item.started_at, item.end_at)

			if(differenceTime) {
				let getTimeNumber = differenceTime.getTime();
				workedHours = workedHours + getTimeNumber;
			}
		})

		return workedHours
	}

	const summaryTimeFormatter = () => {
		let workedHours = new Date(hoursSummaryHandle());

		let timePayload = {
			h: timeFormat(workedHours.getHours() - 1),
			m: timeFormat(workedHours.getMinutes()),
			s: timeFormat(workedHours.getSeconds())
		}

		return timePayload.h + ":" + timePayload.m
	}

	const timeDateHandle = (logIn:string, logOut:string) => {
		let differenceTime = calculateHours(logIn, logOut);

		if (differenceTime) {
			let timePayload = {
				h: timeFormat(differenceTime.getHours() - 1),
				m: timeFormat(differenceTime.getMinutes()),
				s: timeFormat(differenceTime.getSeconds())
			}

			if (logOut) {
				return timePayload.h + ":" + timePayload.m
			} else return "--:--"
		}

	}

	//Template
	return (
		<div className="logItem w-full bg-gray-100 p-4 rounded mb-4">
			<div className="logItemHead w-full grid grid-cols-2">
				<div>
					<h1 className="font-bold text-gray-800 text-xl">
						<Moment format="dddd - DD. MM. YYYY">
							{logItem.date}
						</Moment>
					</h1>
				</div>
				<div className="flex justify-end items-center">
					<h1>Day Plan: {user.daily_hours_plan} Hours / Worked Hours: {summaryTimeFormatter()}</h1>
				</div>

			</div>

			<div className="logItemBody w-full">

				<div className="main-data">
					<div className="user-log-container">
						<table className="w-full p-4">
							<thead>
								<tr>
									<th className="py-4 text-left">Logged in:</th>
									<th className="py-4 text-left">Logged out:</th>
									<th className="py-4 text-left">Time summary:</th>
								</tr>
							</thead>
							<tbody>
								{logItem.logs.map((item: any, key: number) => (
									<tr key={key} className="table-row border-b border-gray-400">
										<td className="p-4">
											{formatDate(item.started_at)}
										</td>
										<td>
											{formatDate(item.end_at)}
										</td>
										<td>
											<p className="mr-4">{timeDateHandle(item.started_at, item.end_at)}</p>
										</td>
									</tr>
								))}
							</tbody>
						</table>

					</div>

				</div>

			</div>
		</div>
	)
}

export default WorkOverviewItem