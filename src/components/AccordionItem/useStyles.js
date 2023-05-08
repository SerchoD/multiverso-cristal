const useStyles = ({ showDescription }) => {
	const styles = {
		main_container: `flex flex-col justify-between items-center w-full h-fit
	 bg-white/[50%] hover:bg-white/[60%] border-b-[1px] border-stone-400`,

		question_container: `flex justify-between w-full h-[fit] py-1 hover:bg-white/[50%] cursor-pointer transition-colors hover:shadow-lg ${
			showDescription && 'bg-white/[30%]'
		}`,
		question_text:
			'flex flex-start items-center ml-5 text-black w-[70%] leading-6 py-1',
		question_arrow: `flex justify-center items-center mr-2 ${
			showDescription ? 'rotate-180' : 'rotate-0'
		} transition-all duration-[500ms]`,

		answer_animated_container: `w-full
		 transition-all duration-500 ${showDescription && 'bg-white/[30%]'}`,

		answer_container: 'h-min w-full cursor-pointer pb-3',

		answer_text: 'flex flex-start items-center mx-5 my-3 text-black indent-1 pb-1',
	};
	return styles;
};

export default useStyles;
