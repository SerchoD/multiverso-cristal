/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'background-1': "url('../src/assets/backgrounds/madera-cristal-chica.jpg')",
				'background-2': "url('../src/assets/backgrounds/piedras-colores-cerca.jpg')",
				'background-3': "url('../src/assets/backgrounds/piedras-colores-lejos.jpg')",
				'img-1': "url('../src/assets/images/teatro-1.jpg')",
			},
			screens: {
				// Styles are DESKTOP FIRST
				// Use 'isMobile:[your-style] to define Mobile effect only.'
				isMobile: { max: '720px' },
			},
			colors: {
				color: {
					1: '#e6ccff', // color base
					2: '#ffb3e6',
					3: '#99e6cc',
					4: '#ffe680',
					5: '#80b3ff',
				},
			},
		},
	},
	plugins: [],
};
