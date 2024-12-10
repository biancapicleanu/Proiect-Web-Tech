export const BugTemplate = (db, DataTypes) => {
    return db.define("Bug", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        severity: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        commitURL: {
            type: DataTypes.STRING,
            allowNull: false, 
            unique: true,
            validate: {
                isUrl: true
            }
        },
        mpId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'MP', 
                key: 'user_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        tstId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'TST', 
                key: 'user_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        projectId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Project', 
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        underscored: true
    });
}