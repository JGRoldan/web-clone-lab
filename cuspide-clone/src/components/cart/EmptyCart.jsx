import { Link } from 'react-router-dom'

const EmptyCart = () => {
	return (
		<div className='container-empty-cart'>
			<h4>Tu carrito está vacío.</h4>
			<Link to='/'>
				<span className='cart-main-btn'>VOLVER A LA TIENDA</span>
			</Link>
		</div>
	)
}

export default EmptyCart
