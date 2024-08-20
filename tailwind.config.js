/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,vue}"],
	theme: {
		extend: {
			colors: {
				green: {
					default: "#34d399",
				},
			},
		},
	},
	plugins: [],
};
