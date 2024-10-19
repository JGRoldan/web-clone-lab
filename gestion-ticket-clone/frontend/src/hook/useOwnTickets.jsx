import { useEffect, useState } from "react"
import useAuthStore from "@/store/useAuthStore"

const URL = import.meta.env.VITE_URL

const useOwnTickets = () => {
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

    return { data, orderTicket }
}

export default useOwnTickets