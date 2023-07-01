const useStyles = () => {
	const styles = {
		main_container: `w-screen h-screen bg-black/[50%]** fixed top-0 left-0`,
		menu_board: `flex flex-col justify-start
								h-screen w-[85%] fixed top-0 -left-[0px]
		 						bg-background-1** bg-slate-700 bg-cover bg-center
		  					brightness-75 shadow-[10px_0px_10px_5px_rgba(0,0,0,.7)]
								`,

		topbar_container: `flex items-center
											w-full h-fit bg-slate-600
											shadow-[0px_0px_10px_5px_rgba(0,0,0,.3)] `,
		center_text: `	text-amber-300
											text-shadow-3 p-2`,

		body_container: `flex flex-col justify-start items-center
											w-full flex-grow`,

		footer_container: `flex justify-center w-full h-[50px] absolute** bottom-0* 
							bg-slate-600
		 						shadow-[0px_0px_10px_5px_rgba(0,0,0,.2)]`,

		outside_area: 'h-full w-[15%] fixed right-0 backdrop-blur-[2px]',
	};

	return styles;
};

export default useStyles;
