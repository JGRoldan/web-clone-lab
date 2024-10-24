import useTicket from '@/hook/useTicket'

const TicketForm = () => {
    const { handleSubmit, handleChange, data } = useTicket()

    return (
        <div className="mx-auto flex flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="./ticket-icon.png" alt="Your Company" />
                <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create a ticket</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                        <div className="mt-2">
                            <input id="title" value={data.title} onChange={handleChange} name="title" type="text" autoComplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="detalle" className="block text-sm font-medium leading-6 text-gray-900">Detalle</label>
                        <textarea id="detalle" value={data.detalle} onChange={handleChange} rows="4" name="detalle" type="text" autoComplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Write your problem here..."></textarea>
                    </div>
                    <div>
                        <label htmlFor="problem" className="block mb-2 text-sm font-medium text-gray-900">Choose a problem</label>
                        <select onChange={handleChange} id="problem" name="problem" value={data.problem} className="text-gray-900 block rounded-md w-full py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option value="">Choose a problem</option>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="red">Network</option>
                            <option value="otros">Otros</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Generar ticket</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TicketForm