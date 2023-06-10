import { create } from 'zustand';

const useModalStore = create((set) => ({
	isModalVisible: false,
	modalContent: '',

	showModal: (modalContent) => {
		set({
			isModalVisible: true,
			modalContent: modalContent,
		});
	},

	closeModal: () => {
		set({ isModalVisible: false });
	},
}));

export default useModalStore;
