import React, {useEffect, useState} from "react"

interface Props {
	lastLog: any,
}

const HomeStartTimer: React.FC<Props> = props => {
	const { lastLog } = props;

	//State
	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [hours, setHours] = useState(0)

	const [statusOperator, setStatusOperator] = useState(false)

	useEffect(() => {
		if(lastLog.log_status) {
			setTimer();
			setStatusOperator(true)
		} else {
			setStatusOperator(false)
		}
	}, [lastLog])


	useEffect(() => {
		if (statusOperator) {
			const Interval  = setInterval(() => {
				let timePayload = {
					h: hours,
					m: minutes,
					s: seconds,
				}

				if (seconds === 0 && minutes === 0 && hours === 0) {
					timePayload.h = setTimer().h;
					timePayload.m = setTimer().m;
					timePayload.s = setTimer().s;
				}

				timePayload.s = timePayload.s + 1;
				if (timePayload.s >= 60) {
					timePayload.s = 0;
					timePayload.m = timePayload.m + 1;
				}

				if (timePayload.m >= 60) {
					timePayload.m = 0;
					timePayload.h = timePayload.h + 1;
				}

				setSeconds(timePayload.s);
				setMinutes(timePayload.m);
				setHours(timePayload.h);
			}, 1000);
			return () => clearInterval(Interval)
		} else {
			setSeconds(0);
			setMinutes(0);
			setHours(0);
		}
	})

	//Methods
	const numberFormatter = (input: number) : string => {
		if (input < 10) {
			return "0" + input.toString()
		} return input.toString()
	}

	const setTimer = () => {
		let oldDate: any = new Date(Date.parse(lastLog.started_at));
		let newDate: any = new Date(Date.parse(new Date().toISOString()));

		let oldTime = oldDate.getTime();
		let newTime = newDate.getTime();

		let differenceTime = new Date(0);
		differenceTime.setMilliseconds(newTime - oldTime)


		return {
			h: differenceTime.getHours() - 1,
			m: differenceTime.getMinutes(),
			s: differenceTime.getSeconds(),
		}
	}

	//Template
	return (
		<div className="text-center">
			<h1 className="mt-6 text-gray-100 font-bold text-3xl">
				{numberFormatter(hours)} : {numberFormatter(minutes)} : {numberFormatter(seconds)}
			</h1>
		</div>
	)
}

export default HomeStartTimer