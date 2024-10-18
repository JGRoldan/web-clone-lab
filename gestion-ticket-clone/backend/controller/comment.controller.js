import { getAllC, getAllCommentsByTicketC, createC } from '../repositories/comment.repository.js'
import { updateTicketClosedAt } from '../repositories/ticket.repository.js'

export const getAll = async (req, res) => {
    try {
        const comments = await getAllC()
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllCommentsByTicket = async (req, res) => {
    try {
        const comments = await getAllCommentsByTicketC(req.params.ticket_id)
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const create = async (req, res) => {
    try {
        const commentData = {
            ...req.body,
            user_id: req.user_id,
        }
        const comment = await createC(req.params.ticket_id, commentData)

        if (comment.comment_type === 'cierre') {
            await updateTicketClosedAt(req.params.ticket_id)
        }

        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}