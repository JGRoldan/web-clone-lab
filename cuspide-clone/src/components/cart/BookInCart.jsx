import { useBookStore } from '../../store/useBookStore'
import { convertCurrency } from '@/util/convertCurrency.js'
import './BookInCart.css'

const BookInCart = () => {
	const bookInCart = useBookStore((state) => state.bookInCart)

	return (
		<table className='book-in-cart-table'>
			<thead>
				<tr>
					<th></th>
					<th>Producto/s</th>
					<th>Nombre del libro</th>
					<th>Precio</th>
					<th>Cantidad</th>
					<th>Subtotal</th>
				</tr>
			</thead>
			<tbody>
				{bookInCart.map(({ id, title, price, poster, quantity }) => {
					let convertPrice = convertCurrency(price)
					let totalPrice = convertCurrency(price * quantity)
					return (
						<tr key={id} className='row'>
							<button className='remove-button'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width={30}
									height={30}
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
							<td>
								<div style={{ width: '80px' }}>
									<img src={poster} alt={title} />
								</div>
							</td>
							<td>{title}</td>
							<td>{convertPrice}</td>
							<td>
								<div className='input-book-in-cart'>
									<input type='button' value='-' />
									<input
										type='number'
										value={quantity}
										min='0'
										max='99999'
										step='1'
										placeholder=''
										inputmode='numeric'
										autocomplete='off'
									/>
									<input type='button' value='+' />
								</div>
							</td>
							<td>{totalPrice}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default BookInCart
