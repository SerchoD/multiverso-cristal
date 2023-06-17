import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import FaQAccordion from '../../components/FAQAccordion/FAQAccordion';
import { GEMSTONE_FAQ } from './gemstone_FAQ';
import FormToEmail from '../../components/FormToEmail/FormToEmail';
import Carousel from '../../components/Carousel/Carousel';
import { GEMSTONES_IMAGES } from './gemstoneImages';

const GemstoneTherapy = () => {
	return (
		<PageContainer>
			<Carousel images={GEMSTONES_IMAGES} className={'mt-10'} />
			<FaQAccordion FAQ={GEMSTONE_FAQ} className={''} />
			<FormToEmail className='mt-10' />
		</PageContainer>
	);
};

export default GemstoneTherapy;
