import express from 'express'
import { getAll, getOne, create, getOwn } from '../controller/ticket.controller.js'
import { permission } from '../helper/permission.js'
import { authorize } from '../middleware/authorize.js'

const ticketRoutes = express.Router()

ticketRoutes
    .get('/ticket', authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR]), getAll)
    .get('/ticket/:id', authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR]), getOne)
    .get('/own-ticket', authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR, permission.GENERAL]), getOwn)
    .post('/ticket', authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR, permission.GENERAL]), create)


export default ticketRoutes