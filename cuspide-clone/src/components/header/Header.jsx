import { Link } from 'react-router-dom'
import { useBookStore } from '../../store/useBookStore'
import './Header.css'

const Header = () => {
	const bookInWishList = useBookStore((state) => state.bookInWishList)
	const quantityInWishList = bookInWishList.length

	return (
		<header>
			<Link to={'/'}>
				<img
					className='logo'
					src='/logo-cuspide.jpg'
					alt='Logo de la empresa Cuspide. Empresa de venta de libros.'
				/>
			</Link>
			<form action='' className='center-nav'>
				<input type='text' placeholder='Buscar libro, autor, ISBN...' />
				<input type='submit' value='Lupa' />
			</form>
			<div className='right-nav'>
				<a href='#'>Acceder / Registrarme</a>
				<Link to={`lista-deseos`} className='wish-list-popup'>
					{quantityInWishList > 0 && (
						<span className='wish-list-popup-span active'>
							{quantityInWishList}
						</span>
					)}
					<span>Lista de deseos ❤</span>
				</Link>
				<Link to={`carrito`}>Carrito 🛒</Link>
			</div>
		</header>
	)
}

export default Header
