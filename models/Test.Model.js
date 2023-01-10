"use strict";

module.exports = (sequelize, DataTypes) => {

    const Test = sequelize.define('Test', {
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
        Periudha: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Subject: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Class_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'test',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(Test === sequelize.models.Test); // true
    return Test;
}