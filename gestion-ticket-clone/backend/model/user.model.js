import { commentModel } from './comment.model'
import { ticketModel } from './ticket.model'

export const userModel = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		id_user: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		username: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('admin', 'supervisor', 'tecnico', 'general'),
			allowNull: false,
		},
		token: {
			type: DataTypes.STRING(255),
			allowNull: true,
		},
	})

	User.hasMany(ticketModel, { foreignKey: 'user_id' })
	ticketModel.belongsTo(User, { foreignKey: 'user_id' })

	User.hasMany(commentModel, { foreignKey: 'user_id' })
	commentModel.belongsTo(User, { foreignKey: 'user_id' })

	return User
}
