export const authorize = (action) => {
    return (req, res, next) => {
        const role = req.user_role

        if (!action.includes(role)) {
            return res.status(403).send({ message: 'No tienes permisos para realizar esta acción' })
        }

        next()
    }
}