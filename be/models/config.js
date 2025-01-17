import { DataTypes, Sequelize } from "sequelize";
import { UserTemplate } from "./user.js";
import { ProjectTemplate } from "./project.js";
import { MpTemplate } from "./mp.js";
import { TstTemplate } from "./tst.js";
import { BugTemplate } from "./bug.js";

export const db = new Sequelize({
    dialect: "sqlite",
    storage: "bugTrackingApp.db",
});

export const synchronizeDatabase = async () => {
    await db.authenticate();
    await db.sync();
};

const User = UserTemplate(db, DataTypes);
const Project = ProjectTemplate(db, DataTypes);
const Mp = MpTemplate(db, DataTypes);
const Tst = TstTemplate(db, DataTypes);
const Bug = BugTemplate(db, DataTypes);

User.hasMany(Tst, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Tst.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

User.hasMany(Mp, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Mp.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Project.hasMany(Mp, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Mp.belongsTo(Project, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Project.hasMany(Tst, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Tst.belongsTo(Project, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Project.hasMany(Bug, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});
Bug.belongsTo(Project, {
    foreignKey: "project_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Bug.belongsTo(Mp, {
    foreignKey: "mp_id",
    targetKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Bug.belongsTo(Tst, {
    foreignKey: "tst_id",
    targetKey: "user_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

export { User, Project, Mp, Tst, Bug };
