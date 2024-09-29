import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<h2>Pagina no encontrada.</h2>
			<Link to={'/'} style={{ color: 'red' }}>
				Ir al inicio.
			</Link>
		</>
	)
}

export default NotFound
