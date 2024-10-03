import { useEffect } from 'react'
import { useBookStore } from '@/store/useBookStore'
import { useStoreFilteredBook } from '../../store/useStoreFilteredBook'
import { convertCurrency } from '@/util/convertCurrency.js'
import './Book.css'

const Book = () => {
	const bookData = useBookStore((state) => state.bookData)
	const fetchData = useBookStore((state) => state.setBookData)
	const addToWhishList = useBookStore((state) => state.addToWhishList)
	const selectedEditorial = useStoreFilteredBook(state => state.selectedEditorial)
	const filteredInputText = useStoreFilteredBook(state => state.filteredInputText)
	const minPrice = useStoreFilteredBook(state => state.minPrice)
	const maxPrice = useStoreFilteredBook(state => state.maxPrice)

	const onHandleClickWhishList = (e) => {
		const bookID = e.target.closest('.book').dataset.id
		const bookFiltered = bookData.find((book) => book.id === bookID)
		addToWhishList(bookFiltered)
	}

	const filteredBooksByInputText = filteredInputText === ''
		? bookData
		: bookData.filter(({ title, author, editorial }) =>
			title.toLowerCase().includes(filteredInputText.toLowerCase()) ||
			author.toLowerCase().includes(filteredInputText.toLowerCase()) ||
			editorial.toLowerCase().includes(filteredInputText.toLowerCase()))

	const filteredBooksByEditorial = selectedEditorial === ''
		? filteredBooksByInputText
		: filteredBooksByInputText.filter(({ editorial }) =>
			editorial.includes(selectedEditorial))


	const filteredBookByPrice = filteredBooksByEditorial.filter(({ price }) => {
		const priceNumber = parseFloat(price)
		const minPriceNumber = parseFloat(minPrice)
		const maxPriceNumber = parseFloat(maxPrice)

		// Comprobar si los valores de minPrice o maxPrice son válidos
		const isMinPriceValid = !isNaN(minPriceNumber)
		const isMaxPriceValid = !isNaN(maxPriceNumber)

		if (isMinPriceValid && isMaxPriceValid) {
			return priceNumber >= minPriceNumber && priceNumber <= maxPriceNumber
		} else if (isMinPriceValid) {
			// Si solo minPrice es válido, filtrar los precios mayores o iguales a minPrice
			return priceNumber >= minPriceNumber
		} else if (isMaxPriceValid) {
			// Si solo maxPrice es válido, filtrar los precios menores o iguales a maxPrice
			return priceNumber <= maxPriceNumber
		} else {
			// Si ninguno es válido, mostrar todos los libros
			return true
		}
	})

	useEffect(() => {
		if (bookData.length === 0) {
			fetchData()
		}
	}, [])

	return (
		<div className='container-book'>
			{(filteredBookByPrice.length === 0)
				? <div>No se encontro el libro buscado.</div>
				:
				filteredBookByPrice.map(({ id, poster, title, author, price }) => {
					let convertPrice = convertCurrency(price)

					return (
						<div className='book' key={id} data-id={id}>
							<div className='image-book'>
								<img
									src={poster}
									alt={`Imagen del libro ${title}`}
								/>
							</div>
							<h2 className='book-title'>{title.toUpperCase()}</h2>
							<p className='book-author'>{author.toUpperCase()}</p>
							<p className='book-price'>{convertPrice}</p>
							<div>
								<button
									className='wish-button'
									onClick={onHandleClickWhishList}
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
										className='icon icon-tabler icons-tabler-outline icon-tabler-heart'
									>
										<path
											stroke='none'
											d='M0 0h24v24H0z'
											fill='none'
										/>
										<path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
									</svg>
								</button>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Book
