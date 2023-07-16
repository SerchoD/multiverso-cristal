const useStyles = () => {
	const styles = {
		title_container: `
		  select-none
      flex flex-col justify-center items-center
      mt-[50px]
			text-shadow-4
			px-5
      font-flamenco text-7xl isMobile:text-5xl`,
		logo_container:
			'bg-[#734788] rounded-full w-[200px] h-[200px] flex items-center justify-center mb-5 box-shadow-1',
	};
	return styles;
};

export default useStyles;
