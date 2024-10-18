import { useState, useEffect } from 'react'
import Loader from '@/components/loader/Loader'

const URL = import.meta.env.VITE_URL

const Register = () => {
    const [data, setData] = useState({ username: '', password: '', role: 'general' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        const roleValue = name === 'role' && value === 'Choose a role' ? 'general' : value

        setData(prevData => ({
            ...prevData,
            [name]: name === 'role' ? roleValue : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({ username: '', password: '', role: 'general' })
        setLoading(true)
        /* Enviar data al BE - del BE llega un 201 ✅*/
    }

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [loading])

    return (
        <div className="mx-auto flex flex-col justify-center px-6 py-12 lg:px-8">
            {loading && <Loader text={'Registrando usuario'} /> ||
                <>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit} >
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                <div className="mt-2">
                                    <input id="username" value={data.username} onChange={handleChange} name="username" type="text" autoComplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" value={data.password} onChange={handleChange} name="password" type="password" autoComplete="off" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label for="role" className="block mb-2 text-sm font-medium text-gray-900">Choose a role</label>
                                <select onChange={handleChange} id="role" name="role" value={data.role} className="text-gray-900 block rounded-md w-full py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option selected>Choose a role</option>
                                    <option defaultValue="admin">Admin</option>
                                    <option defaultValue="supervisor">Supervisor</option>
                                    <option defaultValue="tecnico">Tecnico</option>
                                    <option defaultValue="general">General</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                    </div>
                </>
            }
        </div>
    )
}

export default Register