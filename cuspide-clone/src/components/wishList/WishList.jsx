import { useBookStore } from '@/store/useBookStore.js'
import './WishList.css'
import { convertCurrency } from '@/util/convertCurrency.js'
import { useEffect } from 'react'

const WishList = () => {
	const bookInWishList = useBookStore((state) => state.bookInWishList)
	const remoreBookFromWishList = useBookStore(
		(state) => state.removeFromWishList
	)
	const addBookToCart = useBookStore((state) => state.addToCart)
	const bookInCart = useBookStore((state) => state.bookInCart)

	//Borrar libros de la lista de deseos
	const onHandleRemoveClick = (e) => {
		const bookID = e.target.parentElement.parentElement.dataset.id
		remoreBookFromWishList(bookID)
	}

	//Agregar libros al carrito
	const onHandleAddClick = (e) => {
		const bookID = e.target.parentElement.parentElement.dataset.id
		const bookFiltered = bookInWishList.find((book) => book.id === bookID)
		addBookToCart(bookFiltered)
		remoreBookFromWishList(bookID)
	}

	useEffect(() => {
		console.log(bookInCart)
	}, [bookInCart])

	return bookInWishList.length === 0 ? (
		<span>No se han añadido productos a la lista de deseos</span>
	) : (
		<table>
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
						<tr key={id} data-id={id}>
							<td>
								<button onClick={onHandleRemoveClick}>
									Borrar
								</button>
							</td>
							<td>
								<img
									src={poster}
									alt={`Imagen de la portada del libro ${title}.`}
									width={100}
								/>
							</td>
							<td>{title}</td>
							<td>{convertPrice}</td>
							<td>Disponible</td>
							<td>
								<a
									className='add-to-cart'
									onClick={onHandleAddClick}
								>
									Agregar al carrito
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
