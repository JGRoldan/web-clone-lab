import { commentModel } from './comment.model'

export const ticketModel = (sequelize, DataTypes) => {
	const Ticket = sequelize.define('ticket', {
		id_ticket: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		title: {
			type: DataTypes.STRING(80),
			allowNull: false,
		},
		problem: {
			type: DataTypes.ENUM('hardware', 'software', 'red', 'otros'),
			allowNull: false,
		},
		detalle: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM('abierto', 'cerrado', 'progreso'),
			allowNull: false,
			defaultValue: 'abierto',
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		closed_at: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		user_id: {
			type: DataTypes.STRING(255),
			allowNull: false,
			references: {
				model: 'user',
				key: 'id_user',
			},
		},
	})

	Ticket.hasMany(commentModel, { foreignKey: 'ticket_id' })
	commentModel.belongsTo(Ticket, { foreignKey: 'ticket_id' })

	return Ticket
}
