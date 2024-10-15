import { Sequelize } from 'sequelize'
import { commentModel } from '../model/comment.model.js'
import { ticketModel } from '../model/ticket.model.js'
import { userModel } from '../model/user.model.js'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize({
	dialect: 'mysql',
	database: process.env.DB,
	username: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.DB_PORT,
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = userModel(sequelize, Sequelize)
db.tickets = ticketModel(sequelize, Sequelize)
db.comments = commentModel(sequelize, Sequelize)

// Definir las asociaciones después de que todos los modelos estén cargados
db.users.hasMany(db.tickets, { foreignKey: 'user_id' })
db.tickets.belongsTo(db.users, { foreignKey: 'user_id' })

db.users.hasMany(db.comments, { foreignKey: 'user_id' })
db.comments.belongsTo(db.users, { foreignKey: 'user_id' })

db.tickets.hasMany(db.comments, { foreignKey: 'ticket_id' })
db.comments.belongsTo(db.tickets, { foreignKey: 'ticket_id' })

// Verificar la conexión a la base de datos
sequelize
	.authenticate()
	.then(() => {
		console.log('Conexión a la base de datos establecida correctamente.')
	})
	.catch((err) => {
		console.error('No se pudo conectar a la base de datos:', err)
	})

// Sincronizar los modelos con la base de datos
sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Sincronización de modelos completada.')
	})
	.catch((err) => {
		console.error('Error al sincronizar los modelos:', err)
	})

export default db
