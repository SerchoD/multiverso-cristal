const useStyles = ({ showText, hideBackGround }) => {
	const styles = {
		main_container: `flex justify-center items-center absolute w-screen h-screen z-50 transition-all ease-in-out duration-1000 ${
			hideBackGround ? 'bg-neutral-900/[0%]' : 'bg-neutral-900/[100%]'
		}`,
		text_container:
			'border-[1px]** border-white/[10%]**  w-[40%] isMobile:w-[80%] text-center',

		sentence_text: 'text-center',
		author_text: ' text-right',
		text_animation: `transition-all ease-in-out duration-[2000ms] ${
			showText ? 'opacity-100' : 'opacity-0'
		} `,
	};
	return styles;
};

export default useStyles;
