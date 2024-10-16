import express from 'express'
import { getAll, getAllCommentsByTicket, create } from '../controller/comment.controller.js'
import { permission } from '../helper/permission.js'
import { authorize } from '../middleware/authorize.js'

const ticketRoutes = express.Router()

ticketRoutes
    .get('/comment', authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR]), getAll)
    .get('/comment/:ticket_id', authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR]), getAllCommentsByTicket)
    .post('/comment/:ticket_id', authorize([permission.TECNICO]), create)

export default ticketRoutes