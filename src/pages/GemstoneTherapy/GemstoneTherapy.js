import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import FaQAccordion from '../../components/FAQAccordion/FAQAccordion';
import { GEMSTONE_FAQ } from './gemstone_FAQ';

const GemstoneTherapy = () => {
	return (
		<PageContainer>
			<h1 className='mt-10'>Página de Gemoterapia</h1>

			<FaQAccordion FAQ={GEMSTONE_FAQ} className={''} />
		</PageContainer>
	);
};

export default GemstoneTherapy;
