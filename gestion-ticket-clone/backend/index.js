import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import authenticationSession from './routes/authenticationSession.route.js'
import authenticationRoutes from './routes/authentication.route.js'
import tiketRoutes from './routes/ticket.route.js'
import commentRoutes from './routes/comment.route.js'
import userRoutes from './routes/userRoutes.route.js'
import { isLogin } from './middleware/auth.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

/* Hacer las rutas */
app.use('/api/auth', authenticationSession)
app.use('/api', authenticationRoutes)
app.use('/api', [isLogin], tiketRoutes)
app.use('/api', [isLogin], commentRoutes)
app.use('/api', [isLogin], userRoutes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
