import { useBookStore } from '../../store/useBookStore'
import EmptyCart from './EmptyCart.jsx'
import BookInCart from './BookInCart.jsx'
import './Cart.css'

const Cart = () => {
	const bookInCart = useBookStore((state) => state.bookInCart)
	return (
		<>
			{bookInCart.length === 0 ? (
				<EmptyCart />
			) : (
				<div className='cart-container'>
					<BookInCart />
					<h2>Total del carrito</h2>
				</div>
			)}
		</>
	)
}

export default Cart
