import express from 'express'
import { getAll } from '../controller/user.controller.js'
import { permission } from '../helper/permission.js'
import { authorize } from '../middleware/authorize.js'
// import { verifyToken } from '../middleware/verifyToken.js'

const ticketRoutes = express.Router()

ticketRoutes
    .get('/users', [authorize([permission.ADMIN, permission.TECNICO, permission.SUPERVISOR])], getAll)


export default ticketRoutes