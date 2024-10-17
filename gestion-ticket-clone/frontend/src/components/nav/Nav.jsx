import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '@/components/icon/Icon'
import ArrowRight from '@/components/icon/ArrowRight'
import { navItems } from '@/helper/navItems'

const Nav = () => {
    const location = useLocation()
    const [actualLocation, setActualLocation] = useState(location.pathname)
    const userRole = 'supervisor'

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
                            onClick={() => setActualLocation(location.pathname)}
                            className='p-3 font-semibold flex gap-1'
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