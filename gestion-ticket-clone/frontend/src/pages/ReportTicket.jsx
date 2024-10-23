import ReportTicketProblemStatus from '@/components/graph/ReportTicketProblemStatus'
import ReportTicketsTechnician from '@/components/graph/ReportTicketsTechnician'
import ReportTicketsProblemType from '@/components/graph/ReportTicketsProblemType'

const ReportTicket = () => {
    return (
        <>
            <ReportTicketProblemStatus />
            <ReportTicketsTechnician />
            <ReportTicketsProblemType />
        </>
    )
}

export default ReportTicket