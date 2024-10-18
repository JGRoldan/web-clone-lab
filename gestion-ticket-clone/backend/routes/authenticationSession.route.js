import express from 'express'
import {
    userSession,
} from '../controller/authenticationSession.controller.js'

const authenticationSession = express.Router()

authenticationSession
    .post('/validate-token', userSession)

export default authenticationSession