import { useState } from 'react'
import toast from 'react-hot-toast'
import useAuthStore from '@/store/useAuthStore'

const URL = import.meta.env.VITE_URL

const useTicket = () => {
    const [data, setData] = useState({ title: '', detalle: '', problem: 'otros' })
    const user = useAuthStore(state => state.user)
    const token = useAuthStore(state => state.token)

    const fetchData = async () => {
        const body = {
            ...data,
            user_id: user
        }

        try {
            const response = await fetch(`${URL}/api/ticket`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(body)
            })

            if (response.status === 201) {
                toast.success('Ticket creado correctamente.')
            } else {
                toast.error('Error al crear el ticket.')
            }
        } catch (error) {
            toast.error('Error al crear el ticket.')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        const problemValue = name === 'problem' && value === '' ? 'otros' : value

        setData(prevData => ({
            ...prevData,
            [name]: name === 'problem' ? problemValue : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({ title: '', detalle: '', problem: 'otros' })
        fetchData()
    }
    return { handleSubmit, handleChange, data }
}

export default useTicket