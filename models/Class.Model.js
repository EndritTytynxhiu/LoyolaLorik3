"use strict";

module.exports = (sequelize, DataTypes) => {

    const Class = sequelize.define('Class', {
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
        tableName: 'class',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(Class === sequelize.models.Class); // true
    return Class;
}