const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const getStudentClass = (req, res) => {
    let Class_id = req.params.id
    let students = []
    let error = []
    viti = ""

    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
    })

    if (Class_id == 0 && !Class_id) {
        error.push("Nuk ka Class_id")
    }

    if (error.length >= 1) {
        res.json({ error: error })
    } else {
        models.ClassInfo.findAll({ where: { Class_id: Class_id } }).then((data) => {
            if (data) {
                sequelize.query(`Select Concat(students.FirstName, " ", students.LastName) AS emri, students.id FROM students INNER JOIN classinfo ON classinfo.Students_id = students.id WHERE classinfo.Class_id=${Class_id} AND classinfo.Vititshkollor="${viti}"`).then(result => {
                    res.json({ data: result[0] })
                })
            }
        })
    }
}

const createUser = (req, res) => {
    console.log(req.body);

    FirstName = req.body.FirstName
    BirthDate = req.body.BirthDate
    LastName = req.body.LastName
    Email = req.body.Email
    password = req.body.Password
    Phonenumber = req.body.Phonenumber

    let err = []

    if (FirstName == "" && !FirstName) {
        err.push("FirstName")
    }
    if (LastName == "" && !LastName) {
        err.push("LastName")
    }
    if (Email == "" && !Email) {
        err.push("Email")
    }
    if (password == "" && !password) {
        err.push("Password")
    }
    if (BirthDate == "" && !BirthDate) {
        err.push("BirthDate")
    }
    if (Phonenumber == "" && !Phonenumber) {
        err.push("Phonenumber")
    }

    if (password.length < 8) {
        err.push("Password")
    }

    if (err.length >= 1) {
        res.json({ error: err, succes: "Failed" })
    }

    models.Student.create({...req.body }).then((data) => {
        res.json(data)
    }).catch((error => {
        err.push(error)
        res.json({ error: err, succes: "Failed" })
    }))
}

const getAllStudents = (req, res) => {
    models.Student.findAll().then((data) => {
        res.json({ data: data })
    }).catch(error => {
        res.json({ error: error, succes: "Failed" })
    })
}

module.exports = { getStudentClass, createUser, getAllStudents }