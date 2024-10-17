import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(persist(
    (set) => ({
        isAuthenticated: false,
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false })
    }),
    {
        name: 'auth-storage'
    }
))

export default useAuthStore
