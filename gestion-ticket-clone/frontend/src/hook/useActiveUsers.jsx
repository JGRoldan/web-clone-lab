import { useEffect, useState } from "react"
import useAuthStore from "@/store/useAuthStore"

const URL = import.meta.env.VITE_URL

const useActiveUsers = () => {
    const [user, setUser] = useState([])
    const token = useAuthStore((state) => state.token)

    const fetchData = async () => {
        try {
            const response = await fetch(`${URL}/api/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { user }
}

export default useActiveUsers