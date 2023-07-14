const useStyles = () => {
	const styles = {
		main_container:
			'w-full h-auto pb-5 flex flex-col justify-start items-center bg-white/[30%]',
		input_container: 'w-full flex flex-col items-center py-1 ',
		label: 'self-start ml-[5%] text-black text-base mb-1 text-shadow-2',
		inputs: `w-[90%] h-[35px]
        rounded-lg indent-2
      text-black text-base
			bg-slate-200
        focus:outline focus:outline-3 focus:outline-offset-1 focus:outline-cyan-500/[50%]
        shadow-2xl`,
		text_area: `w-[90%] h-[200px] px-3 py-3 leading-4
        rounded-lg indent-2
      text-black text-base
			bg-slate-200
        focus:outline focus:outline-3 focus:outline-offset-1 focus:outline-cyan-500/[50%]
        shadow-2xl
    `,
		error_text:
			'self-end mr-[5%] text-red-500 bg-black/[50%] px-2 mt-1  rounded-full p-1 font-bold text-xs',
	};
	return styles;
};

export default useStyles;
