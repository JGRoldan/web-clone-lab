import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStoreFilteredBook = create(persist((set)=>({
    selectedEditorial: '',
    minPrice:0,
    maxPrice:100000,
    setSelectedEditorial: (editorial) => set({selectedEditorial: editorial}),
    setMinPrice: (minPrice) => set({minPrice: minPrice}),
    setMaxPrice: (maxPrice) => set({maxPrice: maxPrice}),
}),
{
    name: 'selectedEditorial'
}))



