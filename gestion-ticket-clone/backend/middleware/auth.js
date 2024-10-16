import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const isLogin = (req, res, next) => {
    try {
        const [, token] = req.header('Authorization').split(' ')

        if (!token) return res.status(401).send({ message: 'Acceso no autorizado' })

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        /*{
            dbUsername: '',
            passwordHash: '',
            dbRole: '',
            id_user:'',
            iat: '',
            exp: ''
        }*/
        req.user_id = decoded.id_user
        req.user_role = decoded.dbRole
        next()

    } catch (error) {
        res.status(401).send({ message: 'Token inválido auth.' })
    }
}