export const formatDate = (date) => {
    const fecha = new Date(date)
    const formatedDate = fecha.toLocaleString('es-AR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    return formatedDate
}