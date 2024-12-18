/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'custom-bounce': 'custom-bounce 3s infinite',
			},
			keyframes: {
				'custom-bounce': {
					'0%, 100%': {
						transform: 'translateY(-1%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
					},
					'50%': {
						transform: 'translateY(0)', // Esto es cuando el elemento está en el centro
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
					},
				},
			},
		},

	},
	plugins: [require('@tailwindcss/typography')],
}
