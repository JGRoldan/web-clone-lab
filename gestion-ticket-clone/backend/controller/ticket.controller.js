import { getAllT, getOneT, createT, getOwnT } from '../repositories/ticket.repository.js'

export const getAll = async (req, res) => {
    try {
        const tickets = await getAllT()
        return res.status(200).json(tickets)
    } catch (error) {
        console.error('Error while fetching tickets:', error)
        return res.status(500).json({ message: error.message })
    }
}

export const getOne = async (req, res) => {
    try {
        const ticket = await getOneT(req.params.id)
        return res.status(200).json(ticket)
    } catch (error) {
        console.error('Error while fetching ticket:', error)
        return res.status(500).json({ message: error.message })
    }
}

export const create = async (req, res) => {
    try {
        const result = await createT(req.body)
        return res.status(201).json({
            message: 'Ticket created successfully.',
            result,
        })
    } catch (error) {
        console.error('Error while creating ticket:', error)
        return res.status(500).json({ message: error.message })
    }
}

export const getOwn = async (req, res) => {
    try {
        const tickets = await getOwnT(req.user_id)
        return res.status(200).json(tickets)
    } catch (error) {
        console.error('Error while fetching tickets:', error)
        return res.status(500).json({ message: error.message })
    }
}