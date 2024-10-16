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

export const getUser = async (username) => {
    try {
        const result = await db.users.findOne({
            where: { username },
        })
        return result
    } catch (error) {
        console.error('Error getting user:', error)
        throw error
    }
}

export const userUpdateToken = async (username, token) => {
    try {
        const result = await db.users.update(
            { token },
            { where: { username } }
        )
        return result
    } catch (error) {
        console.error('Error updating user token:', error)
        throw error
    }
}