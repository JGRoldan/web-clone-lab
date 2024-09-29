export const convertCurrency = (price) => {
	const formatter = price.toLocaleString('es-AR', {
		style: 'currency',
		currency: 'ARS',
		minimumFractionDigits: 2,
	})
	return formatter
}
