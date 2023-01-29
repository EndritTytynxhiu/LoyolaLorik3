"use strict";

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('Student', {
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
        BirthDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Phonenumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'students',
        timestamps: false,
        defaultScope: {
            attributes: { exclude: ['Password'] }
        }
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(User === sequelize.models.User); // true
    return User;
}