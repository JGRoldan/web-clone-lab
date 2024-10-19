import { useState } from 'react'
import toast from 'react-hot-toast'

const URL = import.meta.env.VITE_URL

const useRegister = () => {
    const [data, setData] = useState({ username: '', password: '', role: 'general' })

    const fetchData = async () => {

        try {
            const response = await fetch(`${URL}/api/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.status === 201) {
                toast.success('Usuario registrado.')
            } else {
                toast.error('Error al registrar usuario.')
            }
        } catch (error) {
            toast.error('Error al registrar usuario.')
        }
    }

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
        fetchData()
    }
    return { data, handleChange, handleSubmit }
}

export default useRegister