import { useBookStore } from '../../store/useBookStore'
import EmptyCart from './EmptyCart.jsx'
import BookInCart from './BookInCart.jsx'
import './Cart.css'
import TotalAmount from './TotalAmount.jsx'

const Cart = () => {
	const bookInCart = useBookStore((state) => state.bookInCart)

	return (
		<>
			{bookInCart.length === 0 ? (
				<EmptyCart />
			) : (
				<div className='cart-container'>
					<BookInCart />
					<TotalAmount />
				</div>
			)}
		</>
	)
}

export default Cart
