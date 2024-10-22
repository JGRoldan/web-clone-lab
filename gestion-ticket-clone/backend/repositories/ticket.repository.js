import db from '../config/db.config.js'

export const getAllT = async () => {
    try {
        const tickets = await db.tickets.findAll()
        return tickets
    } catch (error) {
        console.error('Error while fetching tickets:', error)
        throw error
    }
}

export const getOneT = async (id) => {
    try {
        const ticket = await db.tickets.findByPk(id)
        return ticket
    } catch (error) {
        console.error('Error while fetching ticket:', error)
        throw error
    }
}

export const createT = async (ticket) => {
    try {
        const result = await db.tickets.create(ticket)
        return result
    } catch (error) {
        console.error('Error while creating ticket:', error)
        throw error
    }
}

export const getOwnT = async (user_id) => {
    try {
        const tickets = await db.tickets.findAll({
            where: {
                user_id,
            },
        })
        return tickets
    } catch (error) {
        console.error('Error while fetching tickets:', error)
        throw error
    }
}

export const updateTicketClosedAt = async (id) => {
    try {
        const ticket = await db.tickets.findByPk(id)
        ticket.closed_at = new Date()
        ticket.status = 'cerrado'
        await ticket.save()
    } catch (error) {
        console.error('Error while updating ticket at closed:', error)
        throw error
    }
}

export const updateTicketToInProgress = async (id) => {
    try {
        const ticket = await db.tickets.findByPk(id)
        ticket.status = 'progreso'
        await ticket.save()

        return ticket
    } catch (error) {
        console.error('Error while updating ticket in progress:', error)
        throw error
    }
}