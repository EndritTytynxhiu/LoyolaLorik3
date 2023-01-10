"use strict";

module.exports = (sequelize, DataTypes) => {

    const TestInfo = sequelize.define('TestInfo', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        test_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Nota: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        tableName: 'test_info',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(TestInfo === sequelize.models.TestInfo); // true
    return TestInfo;
}