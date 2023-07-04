import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import FaQAccordion from '../../components/FAQAccordion/FAQAccordion';
import { GEMSTONE_FAQ } from './gemstone_FAQ';
import FormToEmail from '../../components/FormToEmail/FormToEmail';
import Carousel from '../../components/Carousel/Carousel';
import { GEMSTONES_IMAGES } from './gemstoneImages';
import Text from '../../components/Text/Text';
import { GEMOSTONE_TEXTS } from './gemstone_texts';

const GemstoneTherapy = () => {
	return (
		<PageContainer>
			<Carousel images={GEMSTONES_IMAGES} className={'mt-10'} />
			<div className='my-5 flex justify-center gradient-1'>
				<div
					className='w-[70%] isMobile:w-[90%] my-5 h-[300px] overflow-y-auto'
					onTouchMove={(e) => {
						e.stopPropagation();
						e.preventDefault();
					}}
				>
					<Text text={GEMOSTONE_TEXTS[1]} textType={5} />
				</div>
			</div>
			<FaQAccordion FAQ={GEMSTONE_FAQ} className={''} />
			<FormToEmail className='mt-10' />
		</PageContainer>
	);
};

export default GemstoneTherapy;
