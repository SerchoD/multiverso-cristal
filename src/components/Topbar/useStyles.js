const useStyles = () => {
	const styles = {
		main_container: `z-50 absolute top-0 h-14 w-screen
    		flex justify-center items-center   
   			| bg-gradient-to-r from-purple-300/[50%] via-green-300/[30%] to-red-300/[50%] |
				shadow-[0_0px_10px_10px_rgba(0,0,0,.3)]`,
		element_container: 'cursor-pointer',
	};

	return styles;
};

export default useStyles;
