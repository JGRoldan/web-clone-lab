import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '@/components/header/Header.jsx'
import Aside from '@/components/aside/Aside.jsx'
import Book from '@/components/book/Book.jsx'
import WishListPage from '@/pages/WishListPage'
import CartPage from '@/pages/CartPage'
import NotFound from '@/pages/NotFound'

import './App.css'

function App() {
	return (
		<main>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={
							<React.Fragment>
								<Aside />
								<Book />
							</React.Fragment>
						}
					/>
					<Route path='/lista-deseos' element={<WishListPage />} />
					<Route path='/carrito' element={<CartPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
			<section></section>
		</main>
	)
}

export default App
