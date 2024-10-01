import { useBookStore } from '@/store/useBookStore'
import { convertCurrency } from '@/util/convertCurrency.js'
import './TotalAmount.css'

const TotalAmount = () => {
	const bookInCart = useBookStore((state) => state.bookInCart)
	const totalAmount = bookInCart.reduce((acc, { price, quantity }) => {
		return acc + price * quantity
	}, 0)
	const convertTotalAmount = convertCurrency(totalAmount)

	return (
		<table className='total-amount-table'>
			<thead>
				<tr>
					<th style={{ width: 150 }}>Total del Carrito</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Subtotal</td>
					<td>
						<span className='total-amount-span'>
							{convertTotalAmount}
						</span>
					</td>
				</tr>
				<tr>
					<td>Envío</td>
					<td>
						<span className='total-amount-span'>
							Podrás cambiar datos de envío y/o calcular el costo
							en el próximo paso.
						</span>
					</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>
						<span className='total-amount-span'>
							{convertTotalAmount}
						</span>
					</td>
				</tr>
			</tbody>
			<div className='asd'>
				<a>FINALIZAR COMPRA</a>
			</div>
		</table>
	)
}

export default TotalAmount
