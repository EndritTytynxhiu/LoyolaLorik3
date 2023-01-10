"use strict";

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 1,
            foreignKey: true
        },
        Student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
    }, {
        tableName: 'users',
        timestamps: false,
        defaultScope: {
            attributes: { exclude: ['password'] }
        }
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    return User;
}