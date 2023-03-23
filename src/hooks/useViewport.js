import { useState, useEffect } from 'react';

function useViewport() {
	const [isMobile, setIsMobile] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth;
			setIsMobile(width < 720);
			setIsDesktop(width >= 720);
		}

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return { isMobile, isDesktop };
}

export default useViewport;
