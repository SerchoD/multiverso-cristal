import emailjs from '@emailjs/browser';
import {
	EMAILJS_PUBLIC_KEY,
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
} from '../constants/emailjs';

export const sendEmail = async (mailData) => {
	const response = await emailjs.send(
		EMAILJS_SERVICE_ID,
		EMAILJS_TEMPLATE_ID,
		mailData,
		EMAILJS_PUBLIC_KEY
	);

	return response;
};
