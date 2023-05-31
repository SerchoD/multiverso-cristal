export const shuffleArray = (array) => {
	return array.sort(() => Math.random() - 0.5);
};

export const validateEmailFormat = (email) => {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	return emailRegex.test(email);
};

export const validatePropsNotEmpty = (formData) => {
	for (const key in formData) {
		if (typeof formData[key] !== 'string' || formData[key].trim() === '') {
			return false;
		}
	}
	return true;
};
