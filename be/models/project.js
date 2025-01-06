export const ProjectTemplate = (db, DataTypes) => {
    return db.define(
        "Project",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            repoURL: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isUrl: true,
                },
            },
        },
        {
            underscored: true,
        }
    );
};
