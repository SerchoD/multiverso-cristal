const useStyles = () => {
	const styles = {
		main_container: 'flex flex-col items-center',
		elements_container: `flex flex-col justify-start items-center
		  w-screen h-screen max-w-[1200px] overflow-y-auto 
		bg-slate-500/[5%] backdrop-blur-[5px] `,
	};
	return styles;
};

export default useStyles;
