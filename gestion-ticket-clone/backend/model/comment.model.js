export const commentModel = (sequelize, DataTypes) => {
	const Comment = sequelize.define('comment', {
		id_comment: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true,
			unique: true,
		},
		ticket_id: {
			type: DataTypes.STRING(255),
			allowNull: false,
			references: {
				model: 'ticket',
				key: 'id_ticket',
			},
		},
		user_id: {
			type: DataTypes.STRING(255),
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
	})

	return Comment
}
