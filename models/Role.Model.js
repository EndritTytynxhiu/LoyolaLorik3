"use strict";

module.exports = (sequelize, DataTypes) => {

    const Role = sequelize.define('Role', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'role',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(Role === sequelize.models.Role); // true
    return Role;
}