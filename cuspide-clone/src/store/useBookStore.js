import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { bookData as data } from '@/data/bookData.js'

export const useBookStore = create(
	persist(
		(set) => ({
			bookData: [],
			bookInCart: [],
			bookInWishList: [],
			setBookData: () => set({ bookData: data }),

			addToCart: (book) =>
				set((state) => {
					const isBookInCart = state.bookInCart.some(
						(cart) => cart.id === book.id
					)
					//Si el libro ya esta en el carrito, se actualiza la cantidad
					if (isBookInCart) {
						return {
							bookInCart: state.bookInCart.map((cartItem) =>
								cartItem.id === book.id
									? {
											...cartItem,
											quantity: cartItem.quantity + 1,
									  }
									: cartItem
							),
						}
					}
					//Si el libro no esta en el carrito, se agrega
					return {
						bookInCart: [
							...state.bookInCart,
							{ ...book, quantity: 1 },
						],
					}
				}),

			removeFromCart: (bookId) =>
				set((state) => ({
					bookInCart: state.bookInCart.filter(
						(book) => book.id !== bookId
					),
				})),
			clearCart: () => set({ bookInCart: [] }),

			addToWhishList: (book) =>
				set((state) => {
					const isBookInWishList = state.bookInWishList.some(
						(wish) => wish.id === book.id
					)

					if (isBookInWishList) {
						return {
							bookInWishList: state.bookInWishList, //Zustan requiere que se retorne algo, sino da error
						}
					}
					return {
						bookInWishList: [...state.bookInWishList, book],
					}
				}),

			removeFromWishList: (bookId) =>
				set((state) => ({
					bookInWishList: state.bookInWishList.filter(
						(book) => book.id !== bookId
					),
				})),

			decreaseQuantity: (bookId) => {
				set((state) => {
					const book = state.bookInCart.find(
						(book) => book.id === bookId
					)

					if (book.quantity > 1) {
						return {
							bookInCart: state.bookInCart.map((cartItem) =>
								cartItem.id === bookId
									? {
											...cartItem,
											quantity: cartItem.quantity - 1,
									  }
									: cartItem
							),
						}
					} else {
						return {
							bookInCart: state.bookInCart.filter(
								(book) => book.id !== bookId
							),
						}
					}
				})
			},
			increaseQuantity: (bookId) => {
				set((state) => {
					const book = state.bookInCart.find(
						(book) => book.id === bookId
					)
					return {
						bookInCart: state.bookInCart.map((cartItem) =>
							cartItem.id === bookId
								? {
										...cartItem,
										quantity: cartItem.quantity + 1,
								  }
								: cartItem
						),
					}
				})
			},
		}),
		{
			name: 'book-storage', // name of the item in the storage (must be unique)
		}
	)
)
