import React, { useEffect, useState } from 'react';
import useToastStore from '../../zustand/stores/toast.store';

const TOAST_TYPE = {
	success: 'bg-cyan-700/[75%]',
	error: 'bg-red-500',
};

const Toast = () => {
	const isToastVisible = useToastStore((state) => state.isToastVisible);
	const toastMessage = useToastStore((state) => state.toastMessage);
	const toastType = useToastStore((state) => state.toastType);
	const duration = useToastStore((state) => state.toastDuration);
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		if (isToastVisible) {
			setShowToast(true);

			setTimeout(() => {
				useToastStore.setState({ isToastVisible: false });
			}, duration);

			setTimeout(() => {
				setShowToast(false);
			}, duration - 1000);
		}
		// eslint-disable-next-line
	}, [isToastVisible]);

	return (
		<>
			<div
				className={`${
					showToast ? 'toast-in' : 'toast-out'
				} fixed bottom-0 left-0 right-0 p-4 ${
					TOAST_TYPE[toastType]
				} text-white text-shadow-1 flex justify-center items-center`}
			>
				{isToastVisible && (
					<div className='flex justify-center items-center w-[80vw]'>{toastMessage}</div>
				)}
			</div>
		</>
	);
};

export default Toast;
