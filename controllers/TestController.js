const { result } = require('lodash');
const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const getTestByUserId = (req, res) => {
    let User_id = req.body.id
    let landa = req.body.landa
    let error = []
    console.log(req.body);

    if (User_id == 0 && !User_id) {
        error.push("Nuk ka User_id")
    }
    if (landa == "" && !landa) {
        error.push("Nuk ka lande")
    }

    if (error.length >= 1) {
        res.json({ error: error })
    } else {
        models.User.findAll({
            where: { id: User_id }
        }).then(result => {
            if (result) {
                models.Subject.findAll({
                    where: { Name: landa }
                }).then(result2 => {
                    if (result2) {
                        sequelize.query(`Select test.Name, test.Periudha, test_info.Nota From users INNER JOIN students ON users.Student_id = students.id INNER JOIN test_info ON students.id = test_info.student_id INNER JOIN test ON test_info.test_id = test.id INNER JOIN subject ON test.Subject = subject.id WHERE subject.Name="${landa}" AND users.id = ${User_id}`).then(result3 => {
                            res.json({ data: result3[0] })
                        })
                    } else {
                        res.json({ error: "Lenda e gabuar" })
                    }
                })
            } else {
                res.json({ error: "Perdoruesi nuk ekziston" })
            }
        })
    }




}

const getTestTeacher = (req, res) => {
    let User_id = req.body.id
    let Class_id = req.body.Class_id
    let error = []
    console.log(req.body);

    if (User_id == 0 && !User_id) {
        error.push("Nuk ka User_id")
    }
    if (Class_id == "" && !Class_id) {
        error.push("Nuk ka klase")
    }

    if (error.length >= 1) {
        res.json({ error: error })
    } else {
        models.User.findOne({
            where: { id: User_id }
        }).then(result => {
            if (result) {
                models.Class.findOne({ attributes: ['Name'] }, {
                    where: { id: Class_id }
                }).then(result2 => {
                    if (result2) {
                        models.Test.findAll({
                            where: { User_id: User_id, Class_id: Class_id }
                        }).then((data) => {
                            console.log(data);
                            res.json({ data: data })
                        })
                    } else {
                        res.json({ error: "Klasa e gabuar" })
                    }
                })
            } else {
                res.json({ error: "Perdoruesi nuk ekziston" })
            }
        })
    }
}

module.exports = { getTestByUserId, getTestTeacher }