import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import DashBoard from '@/components/dashboard/DashBoard'
import NotFound from '@/pages/NotFound'

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default ProtectedRoutes