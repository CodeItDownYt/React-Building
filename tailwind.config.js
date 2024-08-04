/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
				oswald: ["Oswald", "sans-serif"],
			},
			colors: {
				primary: "#FF9E0D",
				secondary: "#1F1F1F",
				gray: "#666666",
				disabled: "#737373",
				faded: "#EDEDED",
				gray2: "#EFEFEF",
				logos: "#C0C0C0",
				teams: "#ADADAD",
				articleDate: "#F2F2F2",
			},
		},
	},
	plugins: [],
};
