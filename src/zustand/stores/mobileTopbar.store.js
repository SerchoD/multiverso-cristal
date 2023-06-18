import { create } from 'zustand';

const useMobileTopbar = create((set) => ({
	isMobileTopbarVisible: false,

	showMobileTopbar: () => {
		set({ isMobileTopbarVisible: true });
	},

	hideMobileTopbar: () => {
		set({ isMobileTopbarVisible: false });
	},
}));

export default useMobileTopbar;
