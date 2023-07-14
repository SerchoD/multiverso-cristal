const useStyles = () => {
	const styles = {
		main_container: `z-50 absolute top-0 h-14 w-screen
    		flex justify-center items-center   
   			| bg-gradient-to-r from-purple-300/[50%] via-green-300/[30%] to-red-300/[50%] |
				shadow-[0_0px_10px_10px_rgba(0,0,0,.3)]`,
		desktop_topbar: `isMobile:hidden`,

		logo_container: `absolute left-0 flex ml-5 mt-1 p-2 self-center cursor-pointer select-none
										scale-[98%]
										hover:scale-[100%] transition-all
		`,

		logo_text_container: `flex flex-col items-center ml-4
				font-flamenco font-bold leading-4 tracking-wide text-lg text-white text-shadow-7`,

		element_container: `flex cursor-pointer 				
				transition-all
				text-shadow-1
				text-amber-300/[75%]
				hover:text-amber-200
				hover:scale-[105%]
				hover:text-shadow-6
		  `,
		active_route: `text-amber-200 scale-[105%] text-shadow-6`,

		mobile_topbar: `isDesktop:hidden
				w-full h-full
				flex flex-row justify-center items-center`,
		center_text_container: `absolute center`,
		center_text: `	text-amber-300/[75%]
		hover:text-amber-200
		text-shadow-3 p-2`,
		icon_burger: `absolute right-1 p-3 cursor-pointer`,
	};

	return styles;
};

export default useStyles;
