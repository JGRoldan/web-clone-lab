export const userModel = (sequelize, DataTypes) => {
	return sequelize.define('user', {
		id_user: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING(20),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
		},
		role: {
			type: DataTypes.ENUM('admin', 'supervisor', 'tecnico', 'general'),
			allowNull: false,
			defaultValue: 'general',
		},
		token: {
			type: DataTypes.STRING(255),
			allowNull: true,
		},
	}, {
		tableName: 'user',
		timestamps: false,
	})

}
