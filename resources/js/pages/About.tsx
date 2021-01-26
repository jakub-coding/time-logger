import React from "react";
import {InertiaLink} from "@inertiajs/inertia-react";

//Interface Props

const About: React.FC = () => {
	//State

	//Methods

	//Template
	return (
		<div className="section-container w-full min-h-screen bg-gray-800">
			<div className="container mx-auto text-gray-100 px-64">
				<h1 className="py-16 text-center text-6xl">About</h1>
				<p className="mb-4">
					Let me see your identification. You don't need to see his identification. We don't need to see his
					identification. These are not the droids your looking for. These are not the droids we're looking for.
					He can go about his business. You can go about your business. Move along. Move along. Move along.
				</p>

				<p className="mb-4">
					The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What
					have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were
					on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship
					apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set
					for stun! She'll be all right. Inform Lord Vader we have a prisoner.
				</p>
				<p className="mb-4">
					Sir, if you'll not be needing me, I'll close down for awhile. Sure, go ahead. What is it? Your fathers
					lightsaber. This is the weapon of a Jedi Knight. Not as clumsy or as random as a blaster. An elegant
					weapon for a more civilized time. For over a thousand generations the Jedi Knights were the guardians of
					peace and justice in the Old Republic. Before the dark times, before the Empire. How did my father die?
					A young Jedi named Darth Vader, who was a pupil of mine until he turned to evil, helped the Empire hunt
					down and destroy the Jedi Knights. He betrayed and murdered your father. Now the Jedi are all but
					extinct. Vader was seduced by the dark side of the Force. The Force?
				</p>
				<p className="mb-4">
					No, my father didn't fight in the wars. He was a navigator on a spice freighter. That's what your uncle
					told you. He didn't hold with your father's ideals. Thought he should have stayed here and not gotten
					involved. You fought in the Clone Wars? Yes, I was once a Jedi Knight the same as your father. I wish
					I'd known him. He was the best star-pilot in the galaxy, and a cunning warrior. I understand you've
					become quite a good pilot yourself. And he was a good friend. Which reminds me... I have something here
					for you. Your father wanted you to have this when you were old enough, but your uncle wouldn't allow it.
					He feared you might follow old Obi-Wan on some damned-fool idealistic crusade like your father did.
				</p>
				<div className="w-full flex justify-center items-center pt-8">
					<InertiaLink href="/" className="text-gray-100 text-3xl py-4 px-8 border-2 border-gray-100 rounded">
						Back
					</InertiaLink>
				</div>
			</div>
		</div>
	);
};

export default About;