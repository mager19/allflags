/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#ff3b3c",
				secondary: "#dbeddd",
				text: "#252525",
			},
		},
	},
	plugins: [require("tailwindcss/nesting")],
};
