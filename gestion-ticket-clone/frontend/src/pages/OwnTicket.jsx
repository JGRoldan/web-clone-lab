import { useEffect, useState } from "react"
import useAuthStore from "@/store/useAuthStore"

const URL = import.meta.env.VITE_URL

const OwnTicket = () => {
    const [data, setData] = useState([])
    const token = useAuthStore((state) => state.token)

    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/api/own-ticket`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    const orderTicket = data.sort((a, b) => {
        const order = { 'abierto': 1, 'progreso': 2, 'cerrado': 3 }
        return order[a.status] - order[b.status]
    })

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {data.length === 0
                ? <div>No tienes tickets activos...</div>
                : (<div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase bg-[#4B49AC] text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Problem
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Detail
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Created at
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Closed at
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderTicket.map(({ closed_at, created_at, detalle, problem, status, title, id_ticket }) => {
                                const bgPill = status === 'abierto'
                                    ? 'bg-green-500'
                                    : status === 'progreso'
                                        ? 'bg-orange-500'
                                        : 'bg-red-500'
                                return (
                                    <tr className="bg-white border-b border-[#4B49AC]" key={id_ticket} data-id={id_ticket}>
                                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <div className="justify-center my-8 select-none flex">
                                                <span className={`py-2 px-4 shadow-md rounded-full ${bgPill} text-white font-semibold`}>{status}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {title}
                                        </td>
                                        <td className="px-6 py-4">
                                            {problem}
                                        </td>
                                        <td className="truncate px-6 py-4 max-w-xs">
                                            {detalle}
                                        </td>
                                        <td className="px-6 py-4">
                                            {created_at}
                                        </td>
                                        <td className="px-6 py-4">
                                            {closed_at}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>)
            }
        </>
    )
}

export default OwnTicket