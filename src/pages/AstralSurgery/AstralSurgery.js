import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import Carousel from '../../components/Carousel/Carousel';
import { ASTRAL_SURGERY_IMAGES } from './astralSurgeryImages';
import { ASTRAL_SURGERY_TEXTS } from './astralSurgery_texts';
import Text from '../../components/Text/Text';
import FaQAccordion from '../../components/FAQAccordion/FAQAccordion';
import FormToEmail from '../../components/FormToEmail/FormToEmail';
import { ASTRAL_SURGERY_FAQ } from './astralSurgery_FAQ';

const AstralSurgery = () => {
	return (
		<PageContainer>
			<Carousel images={ASTRAL_SURGERY_IMAGES} className={'mt-10'} />
			<div className='my-5 flex justify-center gradient-1'>
				<div
					className='w-[70%] isMobile:w-[90%] my-5 isDesktop:h-fit overflow-y-auto'
					onTouchMove={(e) => {
						e.stopPropagation();
						e.preventDefault();
					}}
				>
					<Text text={ASTRAL_SURGERY_TEXTS[1]} textType={5} />
				</div>
			</div>
			<FaQAccordion FAQ={ASTRAL_SURGERY_FAQ} className={''} />
			<FormToEmail className='mt-10' />
		</PageContainer>
	);
};

export default AstralSurgery;
