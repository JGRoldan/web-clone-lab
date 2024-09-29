import { useEffect } from 'react'
import { useBookStore } from '@/store/useBookStore'
import { convertCurrency } from '@/util/convertCurrency.js'
import './Book.css'

const Book = () => {
	const bookData = useBookStore((state) => state.bookData)
	const fetchData = useBookStore((state) => state.setBookData)
	const addToWhishList = useBookStore((state) => state.addToWhishList)

	const onHandleClickWhishList = (e) => {
		const bookID = e.target.closest('.book').dataset.id
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
			})}
		</div>
	)
}

export default Book
