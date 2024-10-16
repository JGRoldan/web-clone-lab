import { getAllT, getOneT, createT } from '../repositories/ticket.repository.js'

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
        const ticketData = {
            ...req.body,
            user_id: req.user_id  // Obtenemos el user_id del middleware auth.js
        }
        console.log('ticketData', ticketData)

        const result = await createT(ticketData)
        return res.status(201).json({
            message: 'Ticket created successfully.',
            result,
        })
    } catch (error) {
        console.error('Error while creating ticket:', error)
        return res.status(500).json({ message: error.message })
    }
}