import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import useAuthStore from '@/store/useAuthStore'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    )
}
const URL = import.meta.env.VITE_URL

const ReportTicketsTechnician = () => {
    const [tickets, setTickets] = useState([])
    const [username, setUsername] = useState([])
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

    const calculateTicketUsername = () => {
        const problems = tickets.reduce((acc, ticket) => {
            const { user: { username } } = ticket
            if (!acc[username]) {
                acc[username] = 0
            }
            acc[username] += 1
            return acc
        }, {})

        // Convertir el objeto a un array de objetos
        const formattedData = Object.keys(problems).map(status => ({
            name: status,
            cantidad: problems[status]
        }))
        setUsername(formattedData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (tickets.length > 0) {
            calculateTicketUsername()
        }
    }, [tickets])

    return (
        <div className='text-center'>
            <h2 className='font-semibold'>Cantidad de tickets por técnico.</h2>
            <PieChart width={500} height={300}>
                <Tooltip />
                <Legend />
                <Pie
                    data={username}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="cantidad"
                >
                    {username.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    )
}

export default ReportTicketsTechnician