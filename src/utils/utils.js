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

export const currentFormattedDate = () => {
	const daysOfWeek = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
	];
	const months = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];

	const currentDate = new Date();
	const currentDay = daysOfWeek[currentDate.getDay()];
	const day = currentDate.getDate();
	const month = months[currentDate.getMonth()];
	const year = currentDate.getFullYear();

	const formattedDate = `${currentDay}, ${day} de ${month}, del ${year}.`;

	return formattedDate;
};
