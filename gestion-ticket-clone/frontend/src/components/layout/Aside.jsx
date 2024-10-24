import useAuthStore from "@/store/useAuthStore"
import Nav from "@/components/nav/Nav"

const Aside = () => {
    const userRole = useAuthStore((state) => state.userRole)
    const userName = useAuthStore((state) => state.userName)

    return (
        <div className='w-60 h-full'>
            <ul className="p-6">
                <li className="flex py-4 first:pt-0 last:pb-0">
                    <div className="relative">
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Imagen del usuario." />
                        <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="ml-3 overflow-hidden">
                        <p className="text-sm font-medium text-slate-900">{userName}</p>
                        <p className="text-sm text-slate-500 truncate">{userRole}</p>
                    </div>
                </li>
            </ul>
            <Nav />
        </div>
    )
}


export default Aside