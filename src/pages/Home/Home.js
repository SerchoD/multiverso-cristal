import React from 'react';
import HomeCards from '../../components/HomeCards/HomeCards';
import { shuffleArray } from '../../utils/utils';
import PageContainer from '../../components/PageContainer/PageContainer';

const ELEMENTS = [
	{
		title: 'Teatro Holístico',
		description:
			'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: 'bg-img-1',
	},
	{
		title: 'Gemoterapia',

		description:
			'La Gemoterapia es una herramienta para Desbloquear y Armonizar el cuerpo energético. Los Chakras son centros energéticos de nuestro cuerpo, a traves de los cuales fluye nuestra energía vital. A veces, por dolor, estrés, tristesa, malos pensamientos, se pueden bloquear, desarmonizar, o distorcionar uno o varios Chakras, impidiendo que nuestra energía fluya correctamente. Provocando mal humor, cansancio, baja energía y con el tiempo síntomas más notables físicos, psíquicos y emocionales. Dependiendo la naturaleza de la causa y la experiencia del individuo, diferentes Chakras se pueden alterar de distinta manera en correlacción a la intencidad y tipo de conflicto. Con Gemoterapia, se trabaja directamente con la energía de los cristales naturales de la tierra, activándolos sobre el cuerpo energético del individuo a tratar. Al ser una técnica energética, se puede practicar de manera presencial así como también a distancia, viendo resultados en todos los casos.',
		// description:
		// 	'Te cuento sobre el desbloqueo y armonización de chakras con técnica de Gemoterapia .Los Chakras son vórtices energéticos de nuestro cuerpo, a traves de los cuales fluye nuestra energía vital. Muchas veces por alguna emoción de dolor, o estrés, se bloquea alguno de estos vórtices, no permitiendo que la energía fluya correctamente. Provocando desde mal humor, cansancio a problemas físicos. Ya que cada uno de los chakras está relacionado con un aspecto de nuestro ser e influyen tanto en el plano físico, como el mental, el emocional y el energético. Con Gemoterapia, se trabaja directamente con la energía de los cristales, activandolos  sobre la energía de la persona a tratar. Al ser energía se puede trabajar tanto presencial como a distancia, viendo los mismos resultados ',
		image: 'bg-img-2',
	},
	{
		title: 'Cirugía Astral',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: 'bg-img-3',
	},
	{
		title: 'Registros Akáshicos',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: 'bg-img-4',
	},
	{
		title: 'Alineación de Chakras',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: 'bg-img-5',
	},
];

// const ELEMENTS = [
// 	{
// 		title: ' Titulo',
// 		description:
// 			'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
// 		image: 'bg-img-1',
// 	},
// 	{
// 		title: 'Titulo',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
// 		image: 'bg-img-2',
// 	},
// 	{
// 		title: ' Titulo',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
// 		image: 'bg-img-3',
// 	},
// 	{
// 		title: ' Titulo',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
// 		image: 'bg-img-4',
// 	},
// 	{
// 		title: '  Titulo',
// 		description:
// 			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
// 		image: 'bg-img-5',
// 	},
// ];

const Home = () => {
	return (
		<PageContainer>
			<div
				className='
						flex justify-center items-center border-[1px] border-blue-400/[50%]
				  	w-[300px] h-[300px] mt-[100px]'
			>
				Logo
			</div>
			{shuffleArray(ELEMENTS).map((cardData, index) => {
				return (
					<HomeCards
						key={index}
						cardData={cardData}
						index={index}
						length={ELEMENTS.length - 1}
					/>
				);
			})}
		</PageContainer>
	);
};

export default Home;
