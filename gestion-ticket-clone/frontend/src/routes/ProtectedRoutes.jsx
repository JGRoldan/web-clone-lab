import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/components/home/Home'
import NotFound from '@/pages/NotFound'
import Register from '@/pages/Register'

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/crear-usuario" element={<Register />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default ProtectedRoutes