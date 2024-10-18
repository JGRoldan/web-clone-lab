import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const userSession = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        jwt.verify(token, process.env.SECRET_KEY)
        return res.status(200).json({
            success: true,
            message: 'Sesión activa.'
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Sesión inválida.'
        })
    }
}