const useStyles = ({ showAccordion }) => {
	const styles = {
		main_container: `flex flex-col justify-start items-center w-[60%] isMobile:w-[90%] mt-5 ${
			showAccordion ? 'mt-5 min-h-fit' : 'pt-0'
		}
			${showAccordion && 'shadow-[10px_10px_10px_5px_rgba(0,0,0,.5)]'}
			rounded-xl
			transition-all duration-700
		 `,
		input: `
		text-lg
		text-black
		placeholder-black/[50%]
		bg-white/[50%] 
		hover:bg-white/[60%]
			focus:rounded-xl
			border-b-[1px]
			border-stone-400
			w-full h-10
			rounded-xl indent-5 `,
	};
	return styles;
};

export default useStyles;
