import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

const ReportTicketProblemStatus = () => {
    const [data, setData] = useState([])

    useEffect(() => {
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

            setData(formattedData)
        }
        calculateTicketProblems()
    }, [])

    return (
        <>
            <h2 className='font-semibold'>Reporte de cantidad de tickets por estado.</h2>
            <BarChart width={500} height={300} data={data} barSize={50}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cantidad" fill="#8884d8" />
            </BarChart>
        </>
    )
}

export default ReportTicketProblemStatus