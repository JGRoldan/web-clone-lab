import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '@/store/useAuthStore'

const URL = import.meta.env.VITE_URL

const useLogin = () => {
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

    return { data, emptyForm, loading, handleChange, onSubmitData }
}

export default useLogin