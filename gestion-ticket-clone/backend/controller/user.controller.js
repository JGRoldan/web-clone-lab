import { getAllU } from '../repositories/user.repository.js'

export const getAll = async (req, res) => {
    try {
        const users = await getAllU()
        return res.status(200).json(users)
    } catch (error) {
        console.error('Error while fetching users:', error)
        return res.status(500).json({ message: error.message })
    }
}