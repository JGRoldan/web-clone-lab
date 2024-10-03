import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStoreFilteredBook = create(persist((set) => ({
    selectedEditorial: '',
    filteredInputText: '',
    minPrice: 0,
    maxPrice: 100000,
    setSelectedEditorial: (editorial) => set({ selectedEditorial: editorial }),
    setFilteredInputText: (text) => set({ filteredInputText: text }),
    setMinPrice: (minPrice) => set({ minPrice: minPrice }),
    setMaxPrice: (maxPrice) => set({ maxPrice: maxPrice }),
}),
    {
        name: 'selectedEditorial'
    }))



