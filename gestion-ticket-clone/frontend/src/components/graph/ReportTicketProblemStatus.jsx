import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import useAuthStore from "@/store/useAuthStore"

const URL = import.meta.env.VITE_URL

const ReportTicketProblemStatus = () => {
    const [tickets, setTickets] = useState([])
    const [ticketStatus, setTicketStatus] = useState([])
    const token = useAuthStore((state) => state.token)

    const fetchData = async () => {
        const response = await fetch(`${URL}/api/ticket/report`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await response.json()
        setTickets(data)
    }

    const calculateTicketProblems = () => {
        const problems = tickets.reduce((acc, ticket) => {
            const { status } = ticket
            if (!acc[status]) {
                acc[status] = 0
            }
            acc[status] += 1
            return acc
        }, {})

        // Convertir el objeto a un array de objetos
        const formattedData = Object.keys(problems).map(status => ({
            name: status,
            cantidad: problems[status]
        }))

        setTicketStatus(formattedData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (tickets.length > 0) {
            calculateTicketProblems()
        }
    }, [tickets])

    return (
        <div className="text-center">
            <h2 className='font-semibold'>Cantidad de tickets por estado.</h2>
            <BarChart width={500} height={310} data={ticketStatus} barSize={50}>
                <CartesianGrid strokeDasharray="1 1" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cantidad" fill="#7978E9" />
            </BarChart>
        </div>
    )
}

export default ReportTicketProblemStatus