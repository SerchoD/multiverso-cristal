const useStyles = () => {
	const styles = {
		logo_container: `flex items-center cursor-pointer select-none
										scale-[98%] isMobile:scale-100
										hover:scale-[100%] transition-all`,

		logo_text_container: `flex flex-col items-center ml-0 p-1
				font-flamenco font-bold leading-4 tracking-wide text-lg text-white text-shadow-7`,
	};

	return styles;
};

export default useStyles;
