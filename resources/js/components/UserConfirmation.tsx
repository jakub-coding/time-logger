import React from 'react'

//Interface Props
interface Props {
	confirmationHandle: (accepted: boolean) => void;
}

const UserConfirmation: React.FC<Props> = props => {
	//State

	//Methods
	const acceptEvent = () => {
		const accepted = true;
		props.confirmationHandle(accepted);
	}

	const closeEvent = () => {
		const accepted = false;
		props.confirmationHandle(accepted)
	}

	//Template
	return (
		<div className="main-container absolute w-full h-screen z-20 flex justify-center items-center">
			<div onClick={closeEvent} className="w-full h-screen absolute z-20 bg-black opacity-25" />
			<div className="float-window relative z-50 p-8 bg-gray-800 shadow-md rounded">
				<div className="absolute top-4 right-4">
					<h1 onClick={closeEvent} className="text-gray-100 font-bold text-2xl cursor-pointer">X</h1>
				</div>
				<div className="title-field text-center py-16">
					<h1 className="text-gray-100 font-bold text-3xl">Please Confirm your Event</h1>
				</div>
				<div className="button-field flex justify-center items-center">
					<button onClick={acceptEvent} className="py-6 px-10 text-gray-100 font-bold text-2xl bg-green-500 mr-16 rounded">Confirm</button>
					<button onClick={closeEvent} className="py-6 px-10 text-gray-100 font-bold text-2xl bg-red-500 rounded">Cancel</button>
				</div>
			</div>
		</div>
	)
}

export default UserConfirmation