import { useBookStore } from '@/store/useBookStore.js'
import { convertCurrency } from '@/util/convertCurrency.js'
import './WishList.css'

const WishList = () => {
	const bookInWishList = useBookStore((state) => state.bookInWishList)
	const removeBookFromWishList = useBookStore(
		(state) => state.removeFromWishList
	)
	const addBookToCart = useBookStore((state) => state.addToCart)

	//Borrar libros de la lista de deseos
	const onHandleRemoveClick = (e) => {
		const bookID = e.target.closest('.row').dataset.id
		removeBookFromWishList(bookID)
	}

	//Agregar libros al carrito
	const onHandleAddClick = (e) => {
		const bookID = e.target.closest('.row').dataset.id
		const bookFiltered = bookInWishList.find((book) => book.id === bookID)
		addBookToCart(bookFiltered)
		removeBookFromWishList(bookID)
	}

	return bookInWishList.length === 0 ? (
		<>
			<table className='whish-list-table'>
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th>Nombre del libro</th>
						<th>Precio por unidad</th>
						<th>Estado de inventario</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td></td>
					</tr>
				</tbody>
			</table>
			<p className='empty-wish-list'>No se han añadido productos a la lista de deseos</p>
		</>
	) : (
		<table className='whish-list-table'>
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th>Nombre del libro</th>
					<th>Precio por unidad</th>
					<th>Estado de inventario</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{bookInWishList.map(({ id, title, price, poster }) => {
					let convertPrice = convertCurrency(price)
					return (
						<tr key={id} className='row' data-id={id}>
							<td>
								<button
									onClick={onHandleRemoveClick}
									className='remove-button'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width={24}
										height={24}
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth={1}
										strokeLinecap='round'
										strokeLinejoin='round'
										className='icon icon-tabler icons-tabler-outline icon-tabler-circle-x'
									>
										<path
											stroke='none'
											d='M0 0h24v24H0z'
											fill='none'
										/>
										<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
										<path d='M10 10l4 4m0 -4l-4 4' />
									</svg>
								</button>
							</td>
							<td>
								<img
									src={poster}
									alt={`Imagen de la portada del libro ${title}.`}
									style={{ width: '100px' }}
								/>
							</td>
							<td>
								<span className='add-to-cart'>{title}</span>
							</td>
							<td>{convertPrice}</td>
							<td>En stock</td>
							<td>
								<a
									className='add-to-cart'
									onClick={onHandleAddClick}
								>
									Añadir al carrito
								</a>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default WishList
