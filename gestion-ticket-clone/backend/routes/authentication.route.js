import express from 'express'
import {
	userRegister,
	userLogin,
} from '@/controllers/authentication.controller.js'

const authenticationRoutes = express.Router()

authenticationRoutes.post('/register', userRegister).post('/login', userLogin)

export default authenticationRoutes
