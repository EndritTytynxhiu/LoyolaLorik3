"use strict";

module.exports = (sequelize, DataTypes) => {

    const Subject = sequelize.define('Subject', {
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
        tableName: 'subject',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(Subject === sequelize.models.Subject); // true
    return Subject;
}