import React from 'react';
import FullBackGround from '../../components/FullBackGround/FullBackGround';
import HomeCards from '../../components/HomeCards/HomeCards';
import Topbar from '../../components/Topbar/Topbar';
import useStyles from './useStyles';
import { shuffleArray } from '../../utils/utils';

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
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
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

const Home = () => {
	const s = useStyles();

	return (
		<div className={s.main_container}>
			{/* <Topbar /> */}
			<FullBackGround />
			<div className={s.elements_container}>
				{/* <div className='flex justify-center items-center border-[1px] border-blue-400/[50%] w-[500px] h-[500px] mt-[100px]'>
					Logo
				</div> */}
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
			</div>
		</div>
	);
};

export default Home;
