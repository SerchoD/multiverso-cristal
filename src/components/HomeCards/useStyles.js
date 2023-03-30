const useStyles = ({ bg_img, index, length }) => {
	const styles = {
		card_container: `flex flex-row w-[75%] h-[180px] mt-10 cursor-pointer ${
			index === 0 && 'mt-24'
		} ${
			index === length && 'mb-24'
		} scale-[98%] hover:scale-100 bg-slate-300/[15%] hover:bg-slate-300/[25%] saturate-50
			hover:saturate-100 hover:backdrop-brightness-[90%]
			text-shadow-1 hover:text-shadow-4
			ease-linear duration-200 hover:backdrop-blur-[10px]
			`,
		img_container: `h-[300px] w-[300px] ${bg_img} bg-contain relative -left-2 `,

		text_container: 'w-full h-full',
		card_title: 'text-center ',
		description_container: 'w-[90%] h-[65%] overflow-y-scroll',
		card_description: ' text-center ',
	};
	return styles;
};

export default useStyles;
