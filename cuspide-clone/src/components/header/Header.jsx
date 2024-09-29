import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
	return (
		<header>
			<img
				src='/logo-cuspide.jpg'
				alt='Logo de la empresa Cuspide. Empresa de venta de libros.'
			/>
			<form action='' className='center-nav'>
				<input type='text' placeholder='Buscar libro, autor, ISBN...' />
				<input type='submit' value='Lupa' />
			</form>
			<div className='right-nav'>
				<a href='#'>Acceder / Registrarme</a>
				<Link to={`lista-deseos`}>Lista de deseos ❤</Link>
				<a href='#'>Carrito 🛒</a>
			</div>
		</header>
	)
}

export default Header
