const useStyles = ({ card_img, index, length }) => {
	const styles = {
		card_container: `shrink-0 flex flex-row w-[75%] h-[180px] mt-10 cursor-pointer 
			${index === 0 && 'mt-24'} 
			${index === length && 'mb-24'} 
			scale-[98%] hover:scale-100 
			bg-slate-300/[15%] hover:bg-slate-300/[25%]
		 	saturate-[10%] hover:saturate-[80%]
			text-shadow-1 hover:text-shadow-4
			hover:backdrop-blur-[10px]
			box-shadow-1 hover:box-shadow-3
			rounded-none hover:rounded-xl
			ease-linear duration-200
			`,
		img_container: `h-auto min-w-[260px] w-[25%] ${card_img} bg-cover relative -left-2 `,

		text_container: 'flex flex-col items-center justify-start h-full w-[70%]  ',
		card_title: 'text-center mt-1',
		description_container: 'w-[90%] h-[65%] overflow-y-auto px-5',
		card_description: ' text-center pb-2',
	};
	return styles;
};

export default useStyles;
