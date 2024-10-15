import { MySqlDialect } from '@sequelize/mysql'
import { Sequelize } from '@sequelize/core'
import commentModel from '../model/comment.model.js'
import ticketModel from '../model/ticket.model.js'
import userModel from '../model/user.model.js'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize({
	dialect: MySqlDialect,
	database: process.env.DB,
	user: process.env.USER,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.DB_PORT,
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.tickets = ticketModel(sequelize, Sequelize)
db.users = userModel(sequelize, Sequelize)
db.comments = commentModel(sequelize, Sequelize)

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
	.sync()
	.then(() => {
		console.log('Sincronización de modelos completada.')
	})
	.catch((err) => {
		console.error('Error al sincronizar los modelos:', err)
	})

export default db
