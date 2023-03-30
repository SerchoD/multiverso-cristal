// import useViewport from '../../hooks/useViewport';

// Gradiente test 1
// | bg-gradient-to-r from-color-4/50 to-color-1/80 |

const useStyles = () => {
	// const { isMobile } = useViewport();
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
