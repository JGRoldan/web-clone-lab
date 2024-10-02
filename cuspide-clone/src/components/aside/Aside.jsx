import { useStoreFilteredBook } from '../../store/useStoreFilteredBook';
import './Aside.css'
const Aside = () => {
	const setSelectedEditorial = useStoreFilteredBook(state => state.setSelectedEditorial);
	const setMinPrice = useStoreFilteredBook(state => state.setMinPrice);
	const setMaxPrice = useStoreFilteredBook(state => state.setMaxPrice);

	const onHandlerSelectedOption = (e) =>{
		setSelectedEditorial(e.target.value);
	}
	const onHandlerSubmit = (e) =>{
		e.preventDefault()
		const { minPrice, maxPrice } = e.target.elements;
		setMinPrice(minPrice.value);
		setMaxPrice(maxPrice.value);
	}
	return (
		<aside className='aside-container'>
				<div className='aside-item'>
					<h3>FILTRAR POR EDITORIAL</h3>
					<select id="editoriales" name="editoriales" aria-placeholder='asd' onChange={onHandlerSelectedOption}>
						<option value="">Seleccioná una editorial</option>
						<option value="Debate">Debate</option>
						<option value="Planeta">Planeta</option>
						<option value="Gaia Ediciones">Gaia Ediciones</option>
						<option value="Plaza & Janes Editores">Plaza & Janes Editores</option>
						<option value="Alfaguara">Alfaguara</option>
						<option value="Booket">Booket</option>
						<option value="Paidos">Paidos</option>
						<option value="Sudamericana">Sudamericana</option>
					</select>
				</div>
				<div className='aside-item'>
					<h3>FILTRAR POR PRECIOS</h3>
					<div className='aside-price-filter'>
						<form action="" onSubmit={onHandlerSubmit}>
							<input type="text" name="minPrice" id="minPrice" className='price-filter-input' placeholder="Min"/>
							<span>-</span>
							<input type="text" name="maxPrice" id="maxPrice" className='price-filter-input' placeholder="Máx"/>
							<button className='price-filter-button' type='submit'>IR</button>
						</form>
						<span className="range-price">*Min. $0.00 - Max. $100000.00</span>
					</div>
				</div>
		</aside>
	)
}
export default Aside
