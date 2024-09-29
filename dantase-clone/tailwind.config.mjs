/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		'text-upward',
		'text-wonderbly',
		'text-getyourguide',
		'text-farfetch',
		'text-fresha',
		'text-burberry',
	],
	theme: {
		extend: {
			colors: {
				upward: 'rgb(121, 111, 95)',
				wonderbly: 'rgb(30, 87, 81)',
				getyourguide: 'rgb(255, 86, 52)',
				farfetch: 'rgb(148, 145, 139)',
				fresha: 'rgb(103, 79, 243)',
				burberry: 'rgb(109, 70, 42)',
			},
			fontFamily: {
				spectral: ['Spectral', 'Serif'],
			},
		},
	},
	plugins: [],
}
