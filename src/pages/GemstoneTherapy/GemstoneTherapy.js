import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer';
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion';

const FAQ = [
	{
		question: '¿Cómo puedo crear una cuenta?',
		answer: 'Para crear una cuenta, sigue estos pasos: ...',
	},
	{
		question: '¿Qué métodos de pago aceptan?',
		answer:
			'Aceptamos tarjetas de crédito y débito, PayPal y transferencias bancarias.',
	},
	{
		question: '¿Cuál es el tiempo de envío?',
		answer:
			'El tiempo de envío depende de la ubicación. En promedio, tarda entre 3 y 5 días hábiles.',
	},
	{
		question: '¿Puedo cancelar mi pedido?',
		answer:
			'Sí, puedes cancelar tu pedido siempre y cuando no haya sido enviado. Para cancelar, contáctanos.',
	},
	{
		question: '¿Ofrecen descuentos para clientes frecuentes?',
		answer:
			'Sí, ofrecemos descuentos exclusivos para nuestros clientes frecuentes. ¡Mantente atento a nuestras promociones!',
	},
];

const GemstoneTherapy = () => {
	return (
		<PageContainer>
			<h1>Página de Gemoterapia</h1>

			<div className='flex flex-col items-center h-[500px] w-full mt-20'>
				<FAQAccordion FAQ={FAQ} />
			</div>
		</PageContainer>
	);
};

export default GemstoneTherapy;
