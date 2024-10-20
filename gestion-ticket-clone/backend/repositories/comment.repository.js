import db from '../config/db.config.js'

export const getAllC = async () => {
    try {
        const comments = await db.comments.findAll()
        return comments
    } catch (error) {
        console.error('Error while fetching comments:', error)
        throw error
    }
}

export const getAllCommentsByTicketC = async (ticket_id) => {
    try {
        const comments = await db.comments.findAll({
            where: {
                ticket_id,
            },
            order: [['comment_date', 'ASC']],
            include: [
                {
                    model: db.users,
                    attributes: ['username'],
                }
            ]
        })
        return comments
    } catch (error) {
        console.error('Error while fetching comments:', error)
        throw error
    }
}

export const createC = async (ticket_id, comment) => {
    try {
        const result = await db.comments.create({
            ticket_id,
            ...comment,
        })
        return result
    } catch (error) {
        console.error('Error while creating comment:', error)
        throw error
    }
}