export const MpTemplate = (db, DataTypes) => {
    return db.define(
        "Mp",
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                primaryKey: true,
            },
            project_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "projects",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
                primaryKey: true,
            },
        },
        {
            underscored: true,
            indexes: [
                {
                    unique: true,
                    fields: ["user_id", "project_id"],
                },
            ],
        }
    );
};
