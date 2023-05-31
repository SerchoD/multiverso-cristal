import React, { useState } from 'react';
import AnimatedContainer from '../AnimatedContainer/AnimatedContainer';
import {
	EMAILJS_PUBLIC_KEY,
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
} from '../../constants/emailjs';
import { useLocation } from 'react-router-dom';
import { TOPBAR_ELEMENT } from '../Topbar/Topbar';
import useStyles from './useStyles';
import { validateEmailFormat, validatePropsNotEmpty } from '../../utils/utils';
import { sendEmail } from '../../services/emailjs';
import { PATHS } from '../../constants/paths';

const FormToEmail = () => {
	const s = useStyles();
	const { pathname: currentRoute } = useLocation();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [completeForm, setCompleteForm] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validatePropsNotEmpty(formData) && validateEmailFormat(formData?.email)) {
			const pageName = Object.values(PATHS).find(
				(element) => element.route === currentRoute
			)?.name;
			try {
				const response = await sendEmail({
					current_page: pageName,
					user_subject: formData?.subject,
					user_name: formData?.name,
					user_mail: formData?.email,
					user_message: formData?.message,
				});
				console.log('response: ', response);
			} catch (error) {
				console.log('error', error);
			}
		} else {
			setCompleteForm(true);
		}
	};

	const handleChangeInputs = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<AnimatedContainer buttonName='Enviar Consulta' className={''}>
			<div className={s?.main_container}>
				<div className={s?.input_container}>
					<label className={s?.label} htmlFor='name'>
						Nombre:
					</label>
					<input
						id='name'
						name='name'
						className={s?.inputs}
						type='text'
						value={formData?.name}
						maxLength={30}
						onChange={handleChangeInputs}
						placeholder='Nombre...'
					/>
					{completeForm && formData?.name?.length <= 0 && (
						<p className={s?.error_text}>Ingrese un nombre</p>
					)}
				</div>

				<div className={s?.input_container}>
					<label className={s?.label} htmlFor='subject'>
						Asunto:
					</label>
					<input
						id='subject'
						name='subject'
						className={s?.inputs}
						type='text'
						value={formData?.subject}
						maxLength={50}
						onChange={handleChangeInputs}
						placeholder='Asunto...'
					/>
					{completeForm && formData?.subject?.length <= 0 && (
						<p className={s?.error_text}>Ingrese un breve título</p>
					)}
				</div>

				<div className={s?.input_container}>
					<label className={s?.label} htmlFor='email'>
						Correo:
					</label>
					<input
						id='email'
						name='email'
						className={s?.inputs}
						type='email'
						value={formData?.email}
						maxLength={50}
						onChange={handleChangeInputs}
						placeholder='Correo...'
					/>
					{completeForm && !validateEmailFormat(formData?.email) && (
						<p className={s?.error_text}>Correo Inválido</p>
					)}
				</div>

				<div className={s?.input_container + 'pb-10'}>
					<label className={s?.label} htmlFor='message'>
						Mensaje:
					</label>
					<textarea
						id='message'
						name='message'
						className={s?.text_area}
						value={formData?.message}
						maxLength={400}
						onChange={handleChangeInputs}
						placeholder='Ingresa tu mensaje'
					/>
					<div className='w-[90%] flex justify-between'>
						<p className='self-start text-gray-200/[50%] text-xs'>
							{formData?.message?.length}/400
						</p>
						{completeForm && formData?.message?.length <= 0 && (
							<p className={s?.error_text + ' mr-[0%]'}>Ingrese un mensaje</p>
						)}
					</div>
				</div>

				<button
					onClick={handleSubmit}
					className='middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
					data-ripple-light='true'
				>
					Enviar
				</button>
			</div>
		</AnimatedContainer>
	);
};

export default FormToEmail;
