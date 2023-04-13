const useStyles = ({ showText, hideBackGround }) => {
	const styles = {
		main_container: `flex justify-center items-center fixed -left-0 w-screen h-screen z-[99]
			transition-all ease-in-out duration-[1500ms] ${
			hideBackGround ? 'bg-neutral-900/[0%]' : 'bg-neutral-900/[100%]'
		}`,
		loader_container:
			'absolute top-[90%] left-[50%] isMobile:left-[calc(50%-50px)] w-fit h-fit',
		text_container:
			' border-white/[10%] flex flex-col justify-center items-center w-[100%]',

		sentence_container: `border-white/[10%] w-auto isDesktop:max-w-[40%] isMobile:w-[80%] 
			animation-right-to-left`,
		sentence_text: 'text-shadow-5 text-center p-5',

		author_container: 'border-white/[10%] animation-left-to-right',
		author_text: 'text-shadow-5 text-right pr-10 pb-4 italic',

		fadeInAndOut_animation: `transition-opacity ease-linear duration-[1000ms] ${
			showText ? 'opacity-100' : 'opacity-0'
		} `,
	};
	return styles;
};

export default useStyles;
