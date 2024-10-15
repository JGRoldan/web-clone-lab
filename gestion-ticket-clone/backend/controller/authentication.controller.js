import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const userRegister = async (req, res) => {
	try {
		req.body.password = bcrypt.hashSync(req.body.password, 10)
		const result = await registerUser(req.body) //Lamar al repository
		res.status(201).json({
			message: 'Usuario registrado correctamente.',
			result,
		})
	} catch (error) {
		console.error('Error during user registration:', error)
		res.status(500).json({ message: error.message })
	}
}

export const userLogin = async (req, res) => {
	try {
		const { username, password } = req.body
		const passwordHash = await getPassword(username) //Lamar al repository
		const match = await bcrypt.compare(password, passwordHash)
		if (!match) {
			res.status(400).json({ message: 'Contraseña Incorrecta.' })
		}
		/*Validar si tiene una sesión activa con el token*/
		//1-obtener token de la ddbb
		//2-validar token
		//3-si es válido, retornar mensaje de sesión activa
		//4-si no es válido, continuar con el login
		//5- Generar y acutalizar token en ddbb
		const token = jwt.sign({ email }, process.env.SECRET_KEY, {
			expiresIn: '1h',
		})

		res.status(200).json({ message: 'Usuario logueado correctamente.' })
	} catch (error) {
		console.error('Error during user login:', error)
		res.status(500).json({ message: error.message })
	}
}
