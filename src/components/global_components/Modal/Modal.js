import React from 'react';
import useModalStore from '../../../zustand/stores/modal.store';

const Modal = () => {
	const { isModalVisible, modalContent } = useModalStore();
	return (
		isModalVisible && (
			<div
				className={`absolute w-screen h-screen top-0 left-0
				bg-black/[50%] backdrop-blur-[3px] z-[999]
          flex flex-col justify-center items-center
        `}
			>
				{modalContent}
			</div>
		)
	);
};

export default Modal;
