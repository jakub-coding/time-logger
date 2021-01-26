import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

//Interface Props

const Contact: React.FC = () => {
	//State

	//Methods
	const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		window.alert('This form is without function, this project is in Dev mode')
	}

	//Template
	return (
		<div className="section-container w-full min-h-screen bg-gray-800">
			<div className="container mx-auto text-gray-100 px-64">
				<h1 className="py-16 text-center text-6xl">Contact</h1>
				<p className="mb-4">
					Let me see your identification. You don't need to see his identification. We don't need to see his
					identification. These are not the droids your looking for. These are not the droids we're looking for.
					He can go about his business. You can go about your business. Move along. Move along. Move along.
				</p>

				<form>
					<input className="w-full mb-4 rounded p-2" type="text" placeholder="Your Name ..."/>
					<textarea className="w-full rounded p-2" cols={30} rows={10} placeholder="type something ..." />
					<button onClick={onSubmit} className="w-full py-2 bg-green-500 text-gray-100 font-bold rounded inline-block mt-4" type="submit">Send message</button>
				</form>

				<div className="w-full flex justify-center items-center pt-8">
					<InertiaLink href="/" className="text-gray-100 text-3xl py-4 px-8 border-2 border-gray-100 rounded">
						Back
					</InertiaLink>
				</div>
			</div>
		</div>
	);
};

export default Contact;