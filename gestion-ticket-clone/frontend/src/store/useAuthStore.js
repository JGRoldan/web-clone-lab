import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(persist(
    (set) => ({
        isAuthenticated: false,
        userRole: '',
        userName: '',
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false }),
        setRole: (role) => set({ userRole: role }),
        setUserName: (name) => set({ userName: name })
    }),
    {
        name: 'auth-storage'
    }
))

export default useAuthStore
