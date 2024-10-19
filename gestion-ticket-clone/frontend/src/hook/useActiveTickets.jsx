import { useState, useEffect } from "react"
import useAuthStore from "@/store/useAuthStore"
import { useNavigate } from "react-router-dom"

const URL = import.meta.env.VITE_URL

const useActiveTickets = () => {
    const [ticket, setTicket] = useState([])
    const token = useAuthStore((state) => state.token)
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/api/ticket`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setTicket(data)
        } catch (error) {
            console.log(error)
        }
    }

    const orderTicket = ticket.sort((a, b) => {
        const order = { 'abierto': 1, 'progreso': 2, 'cerrado': 3 }
        return order[a.status] - order[b.status]
    })

    const onHandlerClick = (e) => {
        const id = e.currentTarget.getAttribute('data-id') //ticket-id
        navigate(`/comentarios/${id}`)
    }

    useEffect(() => {
        fetchData()
    }, [])
    return { orderTicket, onHandlerClick }
}

export default useActiveTickets