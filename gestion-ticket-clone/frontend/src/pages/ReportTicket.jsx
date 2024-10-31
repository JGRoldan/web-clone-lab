import ReportTicketProblemStatus from '@/components/graph/ReportTicketProblemStatus'
import ReportTicketsTechnician from '@/components/graph/ReportTicketsTechnician'
import ReportTicketsProblemType from '@/components/graph/ReportTicketsProblemType'

const ReportTicket = () => {
    return (
        <div className='flex gap-20 flex-wrap items-center justify-center'>
            <ReportTicketProblemStatus />
            {/* <ReportTicketsTechnician /> */}
            <ReportTicketsProblemType />
        </div>
    )
}

export default ReportTicket