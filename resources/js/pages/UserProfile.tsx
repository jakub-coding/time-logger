import React, {ChangeEvent, useState} from "react";
import MasterLayout from "../layouts/MasterLayout";
import axios from "axios";

//Interface Props
interface Props {
	authUser: any
}

const UserProfile: React.FC<Props> = props => {
	const { authUser } = props;

	//State
	const [inputDisabled, setInputDisabled] = useState(true);
	const [userName, setUserName] = useState(authUser.name)
	const [userMail, setUserMail] = useState(authUser.email)
	const [userDaily, setUserDaily] = useState(authUser.daily_hours_plan)
	const [userWeekly, setUserWeekly] = useState(authUser.weekly_hours_plan)


	const inputEditHandle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();

		if(inputDisabled) {
			setInputDisabled(false)
		} else {
			setInputDisabled(true)
		}
	}

	const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();

		if(window.confirm('Save Changes ?')) {
			const userDataPayload = {
				name: userName,
				email: userMail,
				daily_hours_plan: userDaily,
				weekly_hours_plan: userWeekly,
			}

			axios.patch("/api/users/"+authUser.id, userDataPayload)
				.then(response => {console.log(response.data)})
				.catch(error => {console.error(error)});

			inputEditHandle(event);
		}
	}

	const inputHandle = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.id === "user-name") {
			setUserName(event.target.value)
		}
		if (event.target.id === "user-email") {
			setUserMail(event.target.value)
		}
		if (event.target.id === "daily-hours") {
			setUserDaily(event.target.value)
		}
		if (event.target.id === "weekly-hours") {
			setUserWeekly(event.target.value)
		}
	}


	//Template
	return (
		<MasterLayout user={authUser} title="User Profile">
			<div className="user-profile-container grid grid-cols-2">
				<form>
					<h1 className="text-gray-100 text-2xl font-bold mb-4">User info:</h1>
					<label className="pb-2 text-gray-100 inline-block" htmlFor="user-name">User Name:</label>
					<input className="user-form-input" id="user-name" type="text" onChange={inputHandle} disabled={inputDisabled} value={userName}/>
					<label className="pb-2 text-gray-100 inline-block" htmlFor="user-email">User E-mail:</label>
					<input className="user-form-input" id="user-email" type="mail" onChange={inputHandle} disabled={inputDisabled} value={userMail}/>


					<h1 className="text-gray-100 text-2xl font-bold mb-4 mt-8">User work plan:</h1>
					<label className="pb-2 text-gray-100 inline-block" htmlFor="daily-hours">Daily hours plan:</label>
					<input className="user-form-input" id="daily-hours" type="number" onChange={inputHandle} disabled={inputDisabled} value={userDaily}/>
					<label className="pb-2 text-gray-100 inline-block" htmlFor="weekly-hours">Weekly hours plan:</label>
					<input className="user-form-input" id="weekly-hours" type="number" onChange={inputHandle} disabled={inputDisabled} value={userWeekly}/>

					{
						inputDisabled? (
							<button className="py-2 px-4 bg-blue-500 text-gray-100 font-bold rounded" onClick={inputEditHandle}>Edit</button>
						) : (
							<button className="py-2 px-4 bg-green-500 text-gray-100 font-bold rounded" onClick={onSubmit}>Save</button>
						)

					}

				</form>
			</div>
		</MasterLayout>
	);
};

export default UserProfile;