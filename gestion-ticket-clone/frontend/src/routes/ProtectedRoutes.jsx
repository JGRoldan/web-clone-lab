import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/components/home/Home'
import NotFound from '@/pages/NotFound'
import Register from '@/pages/Register'
import ActiveUser from '@/pages/ActiveUser'
import GenerateTicket from '@/pages/GenerateTicket'
import ActiveTicket from '@/pages/ActiveTicket'
import OwnTicket from '@/pages/OwnTicket'
import CommentTicket from '@/pages/CommentTicket'
import ReportTicket from '@/pages/ReportTicket'

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/crear-usuario" element={<Register />} />
                <Route path="/usuarios-activos" element={<ActiveUser />} />
                <Route path="/generar-ticket" element={<GenerateTicket />} />
                <Route path="/tickets-activos" element={<ActiveTicket />} />
                <Route path="/mis-tickets" element={<OwnTicket />} />
                <Route path="/comentarios/:id" element={<CommentTicket />} />
                <Route path="/estadisticas" element={<ReportTicket />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default ProtectedRoutes