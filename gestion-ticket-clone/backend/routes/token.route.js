import express from 'express'
import { getAll, getOne, create } from '../controller/ticket.controller.js'

const ticketRoutes = express.Router()

ticketRoutes
    .get('/ticket', getAll)
    .get('/ticket/:id', getOne)
    .post('/ticket', create)

export default ticketRoutes