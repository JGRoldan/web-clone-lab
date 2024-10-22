import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAuthStore from "@/store/useAuthStore"
import toast from 'react-hot-toast'

const URL = import.meta.env.VITE_URL

const useCommentTicket = () => {
    const { id } = useParams()
    const [data, setData] = useState({ ticket_id: id, body: '', comment_type: 'progreso' })
    const [comment, setComment] = useState([])
    const [refreshComments, setRefreshComments] = useState(false)
    const token = useAuthStore((state) => state.token)

    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/api/comment/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
            if (response.status === 201) {
                toast.success('Comentario creado correctamente.')
                setRefreshComments(true)
            } else {
                toast.error('Error al crear el comentario.')
            }
        } catch (error) {
            toast.error('Error al crear el comentario.')
            return
        }
    }

    const onHandlerChange = (e) => {
        const { name, value } = e.target
        const commentValue = name === 'comment_type' && value === 'Choose a comment type' ? 'progreso' : value

        setData(prevData => ({
            ...prevData,
            [name]: name === 'comment_type' ? commentValue : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({ ticket_id: id, body: '', comment_type: 'progreso' })
        fetchData()
    }

    const fetchComment = async () => {
        try {
            const response = await fetch(`${URL}/api/comment/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                const data = await response.json()
                setComment(data)
                setRefreshComments(false)
            } else {
                toast.error('Error al obtener los comentarios.')
            }
        } catch (error) {
            toast.error('Error al obtener los comentarios.')
        }
    }

    useEffect(() => {
        fetchComment()
    }, [refreshComments])

    return { data, comment, onHandlerChange, handleSubmit }
}

export default useCommentTicket