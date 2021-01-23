import React, {useEffect} from "react";

//Interface Props
interface Props {
	lastRecords: any, //eslint-disable-line
}

const HomeLastRecords: React.FC<Props> = props => {
	const { lastRecords } = props;
	//State

	//Methods

	//Template
	return (
		<h1>Last Records</h1>
	);
};

export default HomeLastRecords;