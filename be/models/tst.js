export const TstTemplate = (db, DataTypes) => {
    return db.define("TST", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User', 
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true 
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Project', 
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            primaryKey: true 
        }
    }, {
        underscored: true,
        indexes: [
            {
                unique: true,
                fields: ['user_id', 'project_id']
            }
        ]
    });
}