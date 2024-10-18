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

		if (!userRecord) {
			return res.status(404).json({ message: 'Usuario no encontrado.' })
		}

		const { username: dbUsername, password: passwordHash, token: dbToken, role: dbRole, id_user } = userRecord
		const match = await bcrypt.compare(password, passwordHash)

		if (!match || !dbUsername) {
			return res.status(400).json({ message: 'Credenciales incorrectas.' })
		}

		if (dbToken) {
			try {
				jwt.verify(dbToken, process.env.SECRET_KEY)
				return res.status(200).json({
					message: 'Sesión activa.',
					token: dbToken,
					dbRole,
					dbUsername,
					id_user
				})
			} catch (error) {
				// Si el token ha expirado, se continúa para generar uno nuevo
			}
		}

		const token = jwt.sign({ dbUsername, dbRole, id_user }, process.env.SECRET_KEY, {
			expiresIn: '1h',
		})
		await userUpdateToken(dbUsername, token)

		res.cookie('authToken', token, {
			httpOnly: true,     // No accesible desde el frontend
			secure: false, 	// No se necesita HTTPS
			maxAge: 5 * 60 * 1000, // 5 minutos de duración de la cookie - test
		})

		return res.status(200).json({ token, dbRole, dbUsername, id_user, message: 'Sesión iniciada.' })
	} catch (error) {
		console.error('Error during user login:', error)
		return res.status(500).json({ message: error.message })
	}
}
