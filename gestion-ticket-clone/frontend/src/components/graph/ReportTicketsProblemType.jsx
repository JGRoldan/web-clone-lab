import { useEffect, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip, Label } from 'recharts'
import useAuthStore from "@/store/useAuthStore"

const URL = import.meta.env.VITE_URL

const allProblems = ['hardware', 'software', 'red', 'otro']

const ReportTicketsProblemType = () => {
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
            const { problem } = ticket
            if (!acc[problem]) {
                acc[problem] = 0
            }
            acc[problem] += 1
            return acc
        }, {})

        // Ahora aseguramos que todos los problemas de allProblems estén presentes en el objeto
        const completeProblems = allProblems.reduce((acc, problem) => {
            acc[problem] = problems[problem] || 0
            return acc
        }, {})

        // Convertir el objeto a un array de objetos
        const formattedData = Object.keys(completeProblems).map(problem => ({
            name: problem,
            cantidad: completeProblems[problem]
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
            <h2 className='font-semibold'>Cantidad de tickets por tema.</h2>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={ticketStatus}>
                    <Label />
                    <Tooltip />
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <Radar dataKey="cantidad" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ReportTicketsProblemType