import Header from '@/components/header/Header.jsx'
import Aside from '@/components/aside/Aside.jsx'
import Book from '@/components/book/Book.jsx'
import WishList from '@/components/wishList/WishList.jsx'

import './App.css'

function App() {
	return (
		<main>
			<Header />
			<section>
				<Aside />
				<WishList />
				<Book />
			</section>
		</main>
	)
}

export default App
