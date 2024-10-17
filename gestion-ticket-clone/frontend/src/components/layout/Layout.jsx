import { Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'

const Layout = () => {

    return (
        <div className="flex h-screen">
            <Aside />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 overflow-auto p-6 bg-[#F5F7FF]">
                    <h1 className="text-2xl font-bold text-gray-900">Sistema de gestión de tickets</h1>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout