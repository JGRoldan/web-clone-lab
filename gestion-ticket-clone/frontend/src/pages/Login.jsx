import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '@/components/loader/Loader'
import useAuthStore from '@/store/useAuthStore'

const URL = import.meta.env.VITE_URL

const Login = () => {
    const [data, setData] = useState({ username: '', password: '' })
    const [emptyForm, setEmptyForm] = useState('')
    const [error, setError] = useState('') //BE error
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const setRole = useAuthStore(state => state.setRole)
    const setUserName = useAuthStore(state => state.setUserName)
    const setToken = useAuthStore(state => state.setToken)
    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
    const setUser = useAuthStore(state => state.setUser)

    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()
            if (response.status === 200) {
                setIsAuthenticated(true)
                setToken(result.token)
                setRole(result.dbRole)
                setUserName(result.dbUsername)
                setUser(result.id_user)
                navigate('/home')
            } else {
                setError('Username or password incorrect.')
            }
        } catch (error) {
            console.error('Error during user login:', error)
            return res.status(500).json({ message: error.message })
        }
    }
    const onSubmitData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get('username')
        const password = formData.get('password')

        if (!username || !password) {
            setEmptyForm('Username or password cannot be empty.')
            return
        }
        setEmptyForm('')
        setData({ username: '', password: '' })
        setLoading(true)
        fetchData()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))


    }

    useEffect(() => {
        if (emptyForm) {
            const timer = setTimeout(() => {
                setEmptyForm('')
                setError('')
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [emptyForm])

    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                setLoading(false)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [loading])

    return (
        <div className="mx-auto flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            {loading && <Loader text={'Loading data'} /> ||
                <>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={onSubmitData}>
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
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                            </div>
                        </form>
                        {emptyForm && <div className="mt-2 text-center font-semibold text-red-600 sm:text-sm sm:leading-6">{emptyForm}</div>}
                    </div>

                </>
            }
        </div>
    )
}
export default Login