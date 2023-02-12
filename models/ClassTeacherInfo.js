"use strict";

module.exports = (sequelize, DataTypes) => {

    const ClassTeacherInfo = sequelize.define('ClassTeacherInfo', {
        // Model attributes are defined here
        Class_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Subject_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        VitiShkollor: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'classteacherinfo',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(ClassTeacherInfo === sequelize.models.ClassTeacherInfo); // true
    return ClassTeacherInfo;
}