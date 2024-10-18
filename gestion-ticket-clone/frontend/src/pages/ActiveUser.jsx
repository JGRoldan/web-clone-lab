import { useEffect, useState } from "react"

const URL = import.meta.env.VITE_URL

const ActiveUser = () => {
    const [user, setUser] = useState([])

    const fetchData = async () => {
        const token = localStorage.getItem('data-user')
        try {
            const response = await fetch(`${URL}/api/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs uppercase bg-[#4B49AC] text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete User
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(({ username, role, id_user }) => {
                        return (
                            <tr className="bg-white border-b border-[#4B49AC]" key={id_user} data-id={id_user}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {username}
                                </th>
                                <td className="px-6 py-4">
                                    {role}
                                </td>
                                <td className="px-6 py-4">
                                    Delete icon
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default ActiveUser