export const ticketModel = (sequelize, DataTypes) => {
	return sequelize.define('ticket', {
		id_ticket: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
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
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id_user',
			},
		},
	}, {
		tableName: 'ticket',
		timestamps: false,
	})
}
