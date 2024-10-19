import { formatDate } from "@/helper/formatDate"
import useOwnTickets from "@/hook/useOwnTickets"

const OwnTickets = () => {
    const { data, orderTicket } = useOwnTickets()

    return (
        <>
            {
                data.length === 0
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

                                    const createdDate = formatDate(created_at)
                                    const closedDate = closed_at ? formatDate(closed_at) : '-'

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
                                                {createdDate}
                                            </td>
                                            <td className="px-6 py-4">
                                                {closedDate}
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

export default OwnTickets