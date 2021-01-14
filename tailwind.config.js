const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: [
		"./storage/framework/views/*.php",
		"./resources/views/**/*.blade.php",
		"./resources/**/*.blade.php",
		"./resources/**/*.js",
		"./resources/**/*.ts",
		"./resources/**/*.jsx",
		"./resources/**/*.tsx",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", ...defaultTheme.fontFamily.sans],
			},
		},
	},

	variants: {
		extend: {
			opacity: ["disabled"],
		},
	},

	plugins: [require("@tailwindcss/forms")],
};
