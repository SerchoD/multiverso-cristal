export const PATHS = {
	BASE_URL: { route: '/', name: 'Home' },
	GEMSTONE_THERAPY: { route: '/gemstone-therapy', name: 'Gemoterapia' },
	ASTRAL_SURGERY: { route: '/astral-surgery', name: 'Cirugía Astral' },
	TAROT: { route: '/tarot', name: 'Tarot Holístico' },
};

export const NAVIGATION_ELEMENTS = [
	{ name: 'Gemoterapia', route: PATHS?.GEMSTONE_THERAPY },
	{ name: 'Cirugía Astral', route: PATHS?.ASTRAL_SURGERY },
	{ name: 'Tarot Holístico', route: PATHS?.TAROT },
];
