import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(persist(
    (set) => ({
        isAuthenticated: false,
        userRole: '',
        userName: '',
        token: '',
        setIsAuthenticated: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
        setRole: (role) => set({ userRole: role }),
        setUserName: (name) => set({ userName: name }),
        setToken: (token) => set({ token: token })
    }),
    {
        name: 'auth-storage'
    }
))

export default useAuthStore
