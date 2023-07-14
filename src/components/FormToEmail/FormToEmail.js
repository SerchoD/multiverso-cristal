import React, { useEffect, useState } from 'react';
import AnimatedContainer from '../AnimatedContainer/AnimatedContainer';
import { useLocation } from 'react-router-dom';
import useStyles from './useStyles';
import {
	currentFormattedDate,
	validateEmailFormat,
	validatePropsNotEmpty,
} from '../../utils/utils';
import { sendEmail } from '../../services/emailjs';
import { PATHS } from '../../constants/paths';
import useToastStore from '../../zustand/stores/toast.store';
import LoaderSpin from '../LoaderSpin/LoaderSpin';
import useModalStore from '../../zustand/stores/modal.store';
import { modalVerifyEmail_JSX } from './modalVerifyEmail_JSX';
import { COUNTRIES } from '../../constants/countries';

const initialState = {
	name: '',
	email: '',
	subject: '',
	country: 'Argentina',
	message: '',
};

const FormToEmail = () => {
	const s = useStyles();
	const { showToast } = useToastStore();
	const { showModal, closeModal } = useModalStore();

	const { pathname: currentRoute } = useLocation();
	const [formData, setFormData] = useState(initialState);
	const [completeForm, setCompleteForm] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (validatePropsNotEmpty(formData) && validateEmailFormat(formData?.email)) {
			showModal(
				modalVerifyEmail_JSX({
					email: formData?.email,
					callBackCloseModal: () => closeModal(),
					callBackSendMail: () => {
						handleSendEmail();
						closeModal();
					},
				})
			);
		} else {
			setCompleteForm(true);
		}
	};

	const handleSendEmail = async () => {
		const pageName = Object.values(PATHS).find(
			(element) => element.route === currentRoute
		)?.name;
		try {
			setIsLoading(true);
			const response = await sendEmail({
				current_page: pageName,
				user_subject: formData?.subject,
				user_name: formData?.name,
				user_mail: formData?.email,
				user_message: formData?.message,
				user_country: formData?.country,
				sending_date: currentFormattedDate(),
			});

			if (response.status === 200) {
				showToast({
					message: 'Consulta enviada correctamente',
					duration: 6000,
					type: 'success',
				});
				setCompleteForm(false);
			}
			setFormData(initialState);
		} catch (error) {
			showToast({
				message: 'Ups! Algo salió mal!',
				duration: 6000,
				type: 'error',
			});
		} finally {
			setIsLoading(false);
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
		<AnimatedContainer buttonName='Enviar Consulta'>
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

				<div className={s?.input_container}>
					<label className={s?.label} htmlFor='country'>
						¿Dónde estás?
					</label>
					<select
						id='country'
						name='country'
						className={s?.inputs}
						value={formData?.country}
						maxLength={50}
						onChange={handleChangeInputs}
						placeholder='Pais...'
					>
						{COUNTRIES?.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
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
						<p className='self-start text-gray-200/[50%] text-xs mt-1'>
							{formData?.message?.length}/400
						</p>
						{completeForm && formData?.message?.length <= 0 && (
							<p className={s?.error_text + ' -mr-[0%]'}>Ingrese un mensaje</p>
						)}
					</div>
				</div>

				<button
					onClick={handleSubmit}
					className='middle none w-[50%] h-[50px] center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
					data-ripple-light='true'
				>
					{isLoading ? <LoaderSpin /> : 'enviar'}
				</button>
			</div>
		</AnimatedContainer>
	);
};

export default FormToEmail;
