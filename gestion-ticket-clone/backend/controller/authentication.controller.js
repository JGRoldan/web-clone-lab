import { getUser, userRegister as userRegisterRepository, userUpdateToken } from '../repositories/authentication.repository.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const userRegister = async (req, res) => {
	try {
		req.body.password = bcrypt.hashSync(req.body.password, 10)
		const result = await userRegisterRepository(req.body)
		return res.status(201).json({
			message: 'Usuario registrado correctamente.',
			result,
		})
	} catch (error) {
		console.error('Error during user registration:', error)
		return res.status(500).json({ message: error.message })
	}
}

export const userLogin = async (req, res) => {
	try {
		const { username, password } = req.body
		const userRecord = await getUser(username)
		const { username: dbUsername, password: passwordHash, token: dbToken, role: dbRole } = userRecord
		const match = await bcrypt.compare(password, passwordHash)

		if (!userRecord) {
			return res.status(404).json({ message: 'Usuario no encontrado.' })
		}

		if (!match || !dbUsername) {
			return res.status(400).json({ message: 'Credenciales incorrectas.' })
		}

		if (dbToken) {
			try {
				jwt.verify(dbToken, process.env.SECRET_KEY)
				return res.status(200).json({
					message: 'Sesión activa.',
					token: dbToken
				})
			} catch (error) {
				// Si el token ha expirado, se continúa para generar uno nuevo
			}
		}

		const token = jwt.sign({ dbUsername, passwordHash, dbRole }, process.env.SECRET_KEY, {
			expiresIn: '1h',
		})
		await userUpdateToken(dbUsername, token)

		return res.status(200).json({ message: 'Usuario logueado correctamente.', token })
	} catch (error) {
		console.error('Error during user login:', error)
		return res.status(500).json({ message: error.message })
	}
}
