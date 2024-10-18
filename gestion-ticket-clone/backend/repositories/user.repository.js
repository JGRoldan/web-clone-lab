import db from '../config/db.config.js'

export const getAllU = async () => {
    try {
        const users = await db.users.findAll({ attributes: ['username', 'role', 'id_user'] })
        return users
    } catch (error) {
        console.error('Error while fetching users:', error)
        throw error
    }
}