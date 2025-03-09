/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#212121cc',
				'secondary': '#C3CBEA',
			},
			maxWidth: {
				"9xl": "1440px"
			}

		},
	},
	plugins: [],
}
