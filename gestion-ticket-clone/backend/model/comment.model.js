export const commentModel = (sequelize, DataTypes) => {
	return sequelize.define('comment', {
		id_comment: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		ticket_id: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'ticket',
				key: 'id_ticket',
			},
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id_user',
			},
		},
		body: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		comment_date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		comment_type: {
			type: DataTypes.ENUM('cierre', 'progreso'),
			allowNull: false,
			defaultValue: 'progreso',
		},
	}, {
		tableName: 'comment',
		timestamps: false,
	})

}
