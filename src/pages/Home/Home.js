import React from 'react';
import FullBackGround from '../../components/FullBackGround/FullBackGround';
import Topbar from '../../components/Topbar/Topbar';
import useStyles from './useStyles';

const ELEMENTS = [
	{
		title: 'Teatro Holístico',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: 'bg-img-1',
	},
	{
		title: 'Geomancia',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: "'../src/assets/images/teatro-1.jpg'",
	},
	{
		title: 'Registros Akáshicos',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: "'../src/assets/images/teatro-1.jpg'",
	},
	{
		title: 'Taller de KKCK',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: "'../src/assets/images/teatro-1.jpg'",
	},
	{
		title: 'Taller de Mate',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null',
		image: "'../src/assets/images/teatro-1.jpg'",
	},
];

const Home = () => {
	const s = useStyles();
	return (
		<div className={s.main_container}>
			<Topbar />
			<FullBackGround />
			<div className={s.elements_container}>
				{ELEMENTS.map((element, index) => {
					console.log(element.image);
					return (
						<div
							key={index}
							className={`
						  	${s.card_container}
								${index === 0 && 'mt-24'}
								${index === ELEMENTS.length - 1 && 'mb-24'}
							`}
							style={{
								clipPath: 'polygon(3% 0, 100% 0%, 100% 100%, 0% 100%)',
							}}
						>
							<div
								className={` h-full w-44 ${element?.image} bg-cover`}
								style={{
									clipPath: 'polygon(10% 0, 100% 0%, 88% 100%, 0% 100%)',
								}}
							></div>
							<div>
								{/* TODO TEXTOSSSSSSSSSSSSSS */}
								<p className='text-red-900'>asdasd</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
