const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const InsertTeacherToClasses = (req, res) => {
    let Teacher_id = req.body.Teacher_id
    let Class_name = req.body.Class
    let Subject_name = req.body.Subject_name
    let viti = ""
    let error = []

    if (Teacher_id == 0 && !Teacher_id) {
        error.push("Teacher")
    }
    if (Class_name == "" && !Class_name) {
        error.push("Class")
    }
    if (Subject_name == "" && !Subject_name) {
        error.push("Subject")
    }
    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
    })


    if (error.length >= 1) {} else {
        models.Subject.findOne({ where: { Name: Subject_name } }).then(data2 => {
            if (data2) {
                models.Class.findOne({ where: { Name: Class_name } }).then(data => {
                    if (data) {
                        models.ClassTeacherInfo.create({ Class_id: data.id, Teacher_id: Teacher_id, Subject_id: data2.id, VitiShkollor: viti }).then((resp => {
                            console.log(resp);
                            res.json({ succes: "Succes", data: resp })
                        })).catch(err => {
                            error.push(err)
                        })
                    } else {
                        error.push("Class")
                    }
                })
            } else {
                error.push("Subject")
            }
        })
    }
}

module.exports = { InsertTeacherToClasses }