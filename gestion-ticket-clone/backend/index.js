import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authenticationRoutes from './routes/authentication.route.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Hacer las rutas */
app.use('/api', authenticationRoutes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
