import { create } from 'zustand';

const initialState = { isToastVisible: false, toastMessage: '', toastType: '' };

const useToastStore = create((set) => ({
	isToastVisible: false,
	toastMessage: '',
	toastType: '',
	toastDuration: null,
	showToast: ({ message, duration, type }) => {
		set({
			isToastVisible: true,
			toastMessage: message,
			toastDuration: duration,
			toastType: type,
		});
		setTimeout(() => {
			set(initialState);
		}, duration);
	},
}));

export default useToastStore;
