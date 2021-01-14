import React, {useEffect} from "react";

//Interface Props
interface Props {
	logStatus: string,
}

const HomeStartControls: React.FC<Props> = props => {
	const {logStatus} = props;

	//State


	//Methods
	useEffect(() => {
		console.log(logStatus);
	}, []);

	const onButtonClick = () => {
		console.log(logStatus);
	};

	//Template
	return (
		<article className="col-span-3 start-controls flex flex-col justify-start items-center p-4">
			<h1 className="text-4xl text-gray-100 mb-4 text-center">Start / Stop <br/> Logger Controls</h1>
			<button onClick={onButtonClick} className={logStatus === "start" ? "control-button-green" : "control-button-red"}>
				{logStatus}
			</button>
			<h1 className="text-gray-100 font-bold text-4xl mt-4">00 : 00 : 00</h1>
		</article>
	);
};

export default HomeStartControls;