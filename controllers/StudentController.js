const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const getStudentClass = (req, res) => {
    let Class_id = req.params.id
    let students = []
    let error = []

    if (Class_id == 0 && !Class_id) {
        error.push("Nuk ka Class_id")
    }

    if (error.length >= 1) {
        res.json({ error: error })
    } else {
        models.ClassInfo.findAll({ where: { Class_id: Class_id } }).then((data) => {
            if (data) {
                sequelize.query(`Select Concat(students.FirstName, " ", students.LastName) AS emri, students.id FROM students INNER JOIN classinfo ON classinfo.Students_id = students.id WHERE classinfo.Class_id=${Class_id}`).then(result => {
                    res.json({ data: result[0] })
                })
            }
        })
    }


}

module.exports = { getStudentClass }