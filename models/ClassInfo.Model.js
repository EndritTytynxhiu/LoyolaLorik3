"use strict";

module.exports = (sequelize, DataTypes) => {

    const ClassInfo = sequelize.define('ClassInfo', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        Class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        Students_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    }, {
        tableName: 'classinfo',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(ClassInfo === sequelize.models.ClassInfo); // true
    return ClassInfo;
}