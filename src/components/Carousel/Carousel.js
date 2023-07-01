import React from 'react';
import Slider from 'infinite-react-carousel';
import useViewport from '../../hooks/useViewport';

const Carousel = ({ className, images }) => {
	const { isMobile, isDesktop } = useViewport();

	return (
		<div className={`isDesktop:w-full isMobile:w-screen h-auto ${className}`}>
			<Slider
				dots
				arrows={isDesktop}
				arrowsBlock={true}
				centerMode
				autoplay={true}
				autoplaySpeed={10000}
				swipe={true}
				adaptiveHeight
				shift={isDesktop ? 200 : 10}
				initialSlide={0}
				slidesPerRow={1}
				slidesToShow={isDesktop ? 3 : 1}
			>
				{images?.map((image) => {
					return (
						<img
							key={image?.id}
							src={image?.img}
							className={`w-[500px] isMobile:w-screen h-[400px] rounded-3xl object-cover`}
							alt={'Imagen pendiente...'}
						/>
					);
				})}
			</Slider>
		</div>
	);
};

export default Carousel;
