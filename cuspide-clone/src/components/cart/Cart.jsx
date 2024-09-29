import { useBookStore } from '../../store/useBookStore'
import EmptyCart from './EmptyCart.jsx'
import './Cart.css'

const Cart = () => {
	const bookInCart = useBookStore((state) => state.bookInCart)

	return <>{bookInCart.length === 0 ? <EmptyCart /> : <h2>Productos</h2>}</>
}

export default Cart
