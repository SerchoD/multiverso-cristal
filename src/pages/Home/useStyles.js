const useStyles = () => {
	const styles = {
		main_container: 'flex flex-col items-center',
		elements_container: `z-10 flex flex-col justify-start items-center
      w-screen max-w-[1200px] overflow-y-auto h-[100vh]
    bg-slate-500/[5%] backdrop-blur-[5px]`,
	};
	return styles;
};

export default useStyles;
