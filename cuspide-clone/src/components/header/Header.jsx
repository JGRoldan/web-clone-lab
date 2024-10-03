import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useBookStore } from '@/store/useBookStore'
import { useSearch } from '@/hook/useSearch'
import { useStoreFilteredBook } from '@/store/useStoreFilteredBook'
import debounce from 'just-debounce-it'
import './Header.css'

const Lupa = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M21 21l-6 -6" />
		</svg>
	)
}

const Header = () => {
	const { search, setSearch, error } = useSearch()
	const bookInWishList = useBookStore((state) => state.bookInWishList)
	const setFilteredInputText = useStoreFilteredBook((state) => state.setFilteredInputText)
	const quantityInWishList = bookInWishList.length

	const debouncedBooks = useCallback(
		debounce(search => {
			setFilteredInputText(search)
		}, 500)
		, []
	)

	const handleSubmit = (e) => {
		e.preventDefault()
		setFilteredInputText(search)
	}

	const handleSearch = (e) => {
		const newSearch = e.target.value
		setSearch(newSearch)
		debouncedBooks(newSearch)
	}

	return (
		<div className='header-container'>
			<header>
				<Link to={'/'}>
					<img
						className='logo'
						src='/logo-cuspide.jpg'
						alt='Logo de la empresa Cuspide. Empresa de venta de libros.'
					/>
				</Link>
				<form action='' className='center-nav' onSubmit={handleSubmit}>
					<div className="search-container">
						<input type='text' placeholder='Buscar libro, autor, ISBN...' onChange={handleSearch} />
						<label htmlFor="">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
								<path d="M21 21l-6 -6" />
							</svg>
						</label>
					</div>
				</form>

				<div className='right-nav'>
					<a href='#' className='d-none'>Acceder / Registrarme</a>
					<Link to={`lista-deseos`} className='wish-list-popup'>
						{quantityInWishList > 0 && (
							<span className='wish-list-popup-span active'>
								{quantityInWishList}
							</span>
						)}
						<p><span className='d-none'>Lista de deseos</span> ❤</p>
					</Link>
					<Link to={`carrito`}>
						<p><span className='d-none'>Carrito </span> 🛒</p>
					</Link>
				</div>
			</header>
			<nav>
				<ul>
					<li>Libros</li>
					<li>Catálogo</li>
					<li>Novedades</li>
					<li>Ficción</li>
					<li>Top 100</li>
					<li>Cúspide Max</li>
					<li>Locales</li>
					<li>Contacto</li>
					<li>Mi cuenta</li>
				</ul>
				<form action='' className='center-nav-hidden' onSubmit={handleSubmit}>
					<div className="search-container-hiden">
						<input type='text' placeholder='Buscar libro, autor, ISBN...' onChange={handleSearch} />
						<label htmlFor="">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
								<path d="M21 21l-6 -6" />
							</svg>
						</label>
					</div>
				</form>
			</nav>
		</div>
	)
}

export default Header
