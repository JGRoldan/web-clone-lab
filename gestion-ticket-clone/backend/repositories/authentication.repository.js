import db from '../config/db.config.js'

export const userRegister = async (user) => {
    try {
        const result = await db.users.create(user)
        return result
    } catch (error) {
        console.error('Error during user registration:', error)
        throw error
    }
}