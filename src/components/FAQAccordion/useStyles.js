const useStyles = ({ showAccordion }) => {
	const styles = {
		main_container: `flex flex-col justify-center items-center w-[60%] isMobile:w-[90%] ${
			showAccordion ? 'mt-5 min-h-fit' : 'pt-0'
		}
			${showAccordion && 'shadow-[10px_10px_10px_5px_rgba(0,0,0,.5)]'}
			rounded-xl
			transition-all duration-700
		 `,
	};
	return styles;
};

export default useStyles;
