import { useEffect } from 'react'
import { useBookStore } from '@/store/useBookStore'
import './Book.css'

const Book = () => {
	const bookData = useBookStore((state) => state.bookData)
	const fetchData = useBookStore((state) => state.setBookData)
	const wishList = useBookStore((state) => state.bookInWishList)
	const addToWhishList = useBookStore((state) => state.addToWhishList)

	//Agregar libros al carrito
	// const onHandleClick = (e) => {
	// 	const bookID = e.target.parentElement.parentElement.dataset.id
	// 	const bookFiltered = bookData.filter((book) => book.id === bookID)
	// 	addToCart(bookFiltered)
	// }

	const onHandleClickWhishList = (e) => {
		const bookID = e.target.parentElement.parentElement.dataset.id
		const bookFiltered = bookData.find((book) => book.id === bookID)
		addToWhishList(bookFiltered)
	}

	useEffect(() => {
		if (bookData.length === 0) {
			fetchData()
		}
	}, [])

	return (
		<div className='container-book'>
			{bookData.map(({ id, poster, title, author, price }) => {
				return (
					<div className='book' key={id} data-id={id}>
						<div className='image-book'>
							<img
								src={poster}
								alt={`Imagen del libro ${title}`}
							/>
						</div>
						<h3>{title}</h3>
						<p>{author}</p>
						<span>{price}</span>
						<div>
							<button onClick={onHandleClickWhishList}>
								Add to whish list
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Book
