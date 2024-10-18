import { Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Login from '@/pages/Login'
import useAuthStore from '@/store/useAuthStore.js'
import { useEffect, useState } from 'react'

const URL = import.meta.env.VITE_URL

const AppRoutes = () => {
    const [isValidToken, setIsValidToken] = useState(false)
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const setIsAuthenticated = useAuthStore((state) => state.logout)

    const isValidSession = async () => {
        const token = localStorage.getItem('data-user')

        try {
            const response = await fetch(`${URL}/api/auth/validate-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            if (data.success) {
                setIsValidToken(true)
            } else {
                setIsValidToken(false)
                setIsAuthenticated(false)
            }
        } catch (error) {
            setIsValidToken(false)
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        isValidSession()
    }, [])

    return (
        <Routes>
            {!isAuthenticated || !isValidToken ? (
                <Route path="/login" element={<Login />} />
            ) : (
                <Route path="/*" element={<ProtectedRoutes />} />
            )}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        </Routes>
    )
}

export default AppRoutes
