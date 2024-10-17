import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const verifyToken = (req, res, next) => {
    const token = req.cookies.authToken // Obtener el token de la cookie

    if (!token) {
        return res.status(401).json({ message: 'No autorizado, falta token.' })
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log({ decoded })
        req.user = decoded // Agregar los datos del usuario decodificado a la solicitud
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido o expirado.' })
    }
}
