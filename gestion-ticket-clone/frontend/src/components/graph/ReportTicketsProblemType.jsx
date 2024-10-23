import { useEffect, useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip, Label } from 'recharts'

const ReportTicketsProblemType = () => {
    const [data, setData] = useState([])

    useEffect(() => {
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
                acc[problem] = problems[problem] || 0  // Si el problema no está en los tickets, lo inicializamos a 0
                return acc
            }, {})

            // Convertir el objeto a un array de objetos
            const formattedData = Object.keys(completeProblems).map(problem => ({
                name: problem,
                cantidad: completeProblems[problem]
            }))

            setData(formattedData)
        }
        calculateTicketProblems()
    }, [])

    return (
        <>
            <h2 className='font-semibold'>Reporte de cantidad de tickets por tema.</h2>
            <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <Label />
                    <Tooltip />
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <Radar dataKey="cantidad" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}

export default ReportTicketsProblemType