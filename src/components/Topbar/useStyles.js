const useStyles = ({ currentRoute }) => {
	const styles = {
		main_container: `z-50 absolute top-0 h-14 w-screen
    		flex justify-center items-center   
   			| bg-gradient-to-r from-purple-300/[50%] via-green-300/[30%] to-red-300/[50%] |
				shadow-[0_0px_10px_10px_rgba(0,0,0,.3)]`,
		element_container: `flex cursor-pointer 				
				transition-all
				text-shadow-1
				text-amber-300/[75%]
				hover:text-amber-200
				hover:scale-[105%]
				hover:text-shadow-6
		  `,
		active_route: `text-amber-200 scale-[105%] text-shadow-6`,
	};

	return styles;
};

export default useStyles;
