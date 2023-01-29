const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const InsertStudentToClasses = (req, res) => {
    let Student_id = req.body.Student_id
    let Class_name = req.body.Class
    let error = []
    let viti = ""

    if (Student_id == 0 || !Student_id) {
        error.push("Student")
    }
    if (Class_name == "" || !Class_name) {
        error.push("Class")
    }
    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
    })

    if (error.length >= 1) {
        res.json({ error: error, succes: "Failed" })
    } else {
        models.Class.findOne({ where: { Name: Class_name } }).then(data => {
            if (data) {
                models.ClassInfo.create({ Class_id: data.id, Students_id: Student_id, Vitishkollor: viti }).then((resp => {
                    res.json({ succes: "Succes", data: resp })
                })).catch(err => {
                    error.push(err)
                    res.json({ error: error, succes: "Failed" })
                })
            } else {
                error.push("Class")
                res.json({ error: error, succes: "Failed" })
            }
        })
    }
}

module.exports = { InsertStudentToClasses }