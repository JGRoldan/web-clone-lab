import { Route, Routes, Navigate } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Login from '@/pages/Login'
import useAuthStore from '@/store/useAuthStore.js'


const AppRoutes = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

    return (
        <Routes>
            {!isAuthenticated ? (
                <Route path="/login" element={<Login />} />
            ) : (
                <Route path="/*" element={<ProtectedRoutes />} />
            )}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
    )
}

export default AppRoutes
