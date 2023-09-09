import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import Carousel from '../../components/Carousel/Carousel';
import Text from '../../components/Text/Text';
import { TAROT_IMAGES } from './tarotImages';
import { TAROT_TEXTS } from './tarot_texts';
import { TAROT_FAQ } from './tarot_FAQ';
import FaQAccordion from '../../components/FAQAccordion/FAQAccordion';
import FormToEmail from '../../components/FormToEmail/FormToEmail';

const Tarot = () => {
	return (
		<PageContainer>
			<Carousel images={TAROT_IMAGES} className={'mt-10'} />

			<div className='my-5 flex justify-center gradient-1'>
				<div
					className='w-[70%] isMobile:w-[90%] my-5 isDesktop:h-fit overflow-y-auto'
					onTouchMove={(e) => {
						e.stopPropagation();
						e.preventDefault();
					}}
				>
					<Text text={TAROT_TEXTS[1]} textType={5} />
				</div>
			</div>

			<FaQAccordion FAQ={TAROT_FAQ} className={''} />
			<FormToEmail className='mt-10' />
		</PageContainer>
	);
};

export default Tarot;
