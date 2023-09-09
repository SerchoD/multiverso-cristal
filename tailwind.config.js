/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				flamenco: ['flamenco'],
			},
			backgroundImage: {
				'background-1': "url('../src/assets/backgrounds/madera-cristal-chica.jpg')",
				'background-2': "url('../src/assets/backgrounds/piedras-colores-cerca.jpg')",
				'background-3': "url('../src/assets/backgrounds/piedras-colores-lejos.jpg')",
				'img-1': "url('../src/assets/images/home/teatro-1.jpg')",
				'img-2': "url('../src/assets/images/home/gemoterapia-1.jpg')",
				'img-3': "url('../src/assets/images/home/cirugia-astral-1.jpg')",
				'img-4': "url('../src/assets/images/home/old-book-1.jpg')",
				'img-5': "url('../src/assets/images/home/meditation-1.jpg')",
				'img-6': "url('../src/assets/images/home/tarot-1.jpg')",
			},
			screens: {
				// Styles are DESKTOP FIRST
				// Use 'isMobile:[your-style] to define Mobile effect only.'
				isMobile: { max: '720px' },
				// Use 'isDesktop:[your-style] to define Desktop effect, that ignores when it's Mobile.'
				isDesktop: { min: '721px' },
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
