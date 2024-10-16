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