import Text from '../Text/Text';

export const modalVerifyEmail_JSX = ({
	email,
	callBackCloseModal,
	callBackSendMail,
}) => {
	const handleCancel = () => {
		callBackCloseModal();
	};

	const handleSendMail = () => {
		callBackSendMail();
	};

	return (
		<div
			className={`
			bg-white/[90%]
				w-[40vw] h-[90vh] max-h-[500px]
				isMobile:w-[90vw] isMobile:h-[90vh]
				flex flex-col justify-between items-center
				rounded-2xl
			`}
		>
			<div className='flex flex-col justify-start items-center w-[90%]'>
				<Text
					text={'¡Atención!'}
					className={
						'text-black/[60%] text-4xl isMobile:text-2xl font-bold mt-5 isMobile:mt-2'
					}
				/>
				<Text
					text={
						'Contestaremos al correo que has introducido, asegúrate de que sea correcto.'
					}
					className={
						'text-black/[60%] text-center text-xl isMobile:text-lg font-bold mt-5 isMobile:mt-2'
					}
				/>
			</div>
			<Text
				text={email}
				className={
					'text-black text-center text-2xl isMobile:text-xl font-bold mt-10** isMobile:mt-5**'
				}
			/>
			<div className='flex flex-col mb-5 w-[90%]'>
				<button
					onClick={handleSendMail}
					className='w-full h-[50px] my-1 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full'
				>
					¡Es correcto, enviar!
				</button>
				<button
					onClick={handleCancel}
					className='w-full h-[50px] my-1 isMobile:mt-3 bg-gray-400 hover:bg-gray-600 text-gray-900 text-lg font-bold rounded-full'
				>
					Cancelar
				</button>
			</div>
		</div>
	);
};
