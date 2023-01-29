"use strict";

module.exports = (sequelize, DataTypes) => {

    const Class = sequelize.define('VitiShkollor', {
        // Model attributes are defined here
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        VitiShkollor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'vitishkollor',
        timestamps: false,
    });

    sequelize.sync()

    // `sequelize.define` also returns the model
    console.log(Class === sequelize.models.Class); // true
    return Class;
}