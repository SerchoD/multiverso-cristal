import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import FaQAccordion from '../../components/FAQAccordion/FAQAccordion';
import { GEMSTONE_FAQ } from './gemstone_FAQ';
import FormToEmail from '../../components/FormToEmail/FormToEmail';
import Carousel from '../../components/Carousel/Carousel';

const GemstoneTherapy = () => {
	return (
		<PageContainer>
			<h1 className='mt-10'>Página de Gemoterapia</h1>

			<Carousel />
			<FaQAccordion FAQ={GEMSTONE_FAQ} className={''} />
			<FormToEmail className='mt-10' />
		</PageContainer>
	);
};

export default GemstoneTherapy;
