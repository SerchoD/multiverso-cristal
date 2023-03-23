const useStyles = () => {
	const styles = {
		main_container: 'flex flex-col items-center',
		elements_container: `z-10 flex flex-col justify-start items-center
      w-screen max-w-[1000px] h-screen overflow-y-scroll
    bg-color-4/[5%] backdrop-blur-[5px] `,
		card_container: 'flex-none w-8/12 h-36 mt-10 bg-color-3/[5%] ',
	};
	return styles;
};

export default useStyles;
