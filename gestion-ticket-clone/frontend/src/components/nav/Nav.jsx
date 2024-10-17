import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '@/components/icon/Icon'
import ArrowRight from '@/components/icon/ArrowRight'
import { navItems } from '@/helper/navItems'
import useAuthStore from '@/store/useAuthStore'

const Nav = () => {
    const location = useLocation()
    const [actualLocation, setActualLocation] = useState(location.pathname)
    const userRole = useAuthStore(state => state.userRole)
    const logout = useAuthStore(state => state.logout)
    const setRole = useAuthStore(state => state.setRole)
    const setUserName = useAuthStore(state => state.setUserName)

    const onHandlerClick = (e) => {
        setActualLocation(location.pathname)
        if (!!e.target.dataset.close) {
            logout()
            setRole('')
            setUserName('')
        }
    }

    useEffect(() => {
        setActualLocation(location.pathname)
    }, [location.pathname])
    return (
        <ul className='mt-10'>
            {navItems[userRole].map((item, index) => (
                <Link to={item.path} key={index}>
                    <div
                        className={actualLocation === item.path
                            ? 'mx-3 my-1 rounded-md bg-[#4B49AC] hover:bg-[#413f97] text-white'
                            : 'mx-3 my-1 rounded-md hover:bg-[#4B49AC] text-[#9CA0AC] hover:text-white'}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <li
                            onClick={onHandlerClick}
                            className='p-3 font-semibold flex gap-1'
                            data-close={item.close_session}
                        >
                            <Icon iconName={item.icon} />
                            {item.title}
                        </li>
                        <ArrowRight />
                    </div>
                </Link>
            ))}
        </ul>

    )
}

export default Nav