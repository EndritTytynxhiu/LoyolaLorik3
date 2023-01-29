const { result } = require('lodash');
const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const getTestByUserId = (req, res) => {
    let User_id = req.body.id
    let landa = req.body.landa
    let error = []
    let viti = ""
    console.log(req.body);

    if (User_id == 0 || !User_id) {
        error.push("Nuk ka User_id")
    }
    if (landa == "" || !landa) {
        error.push("Nuk ka lande")
    }
    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
    })
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
                        sequelize.query(`Select test.Name, test.Periudha, test_info.Nota From users INNER JOIN students ON users.Student_id = students.id INNER JOIN test_info ON students.id = test_info.student_id INNER JOIN test ON test_info.test_id = test.id INNER JOIN subject ON test.Subject = subject.id WHERE subject.Name="${landa}" AND users.id = ${User_id} AND test.Vitishkollor="${viti}"`).then(result3 => {
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
    let viti = ""
    console.log(req.body);

    if (User_id == 0 && !User_id) {
        error.push("Nuk ka User_id")
    }
    if (Class_id == "" && !Class_id) {
        error.push("Nuk ka klase")
    }
    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
    })

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
                            where: { User_id: User_id, Class_id: Class_id, VitiShkollor: viti }
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

const updateTest = (req, res) => {
    let Name = req.body.Name
    let Periudha = +req.body.Periudha
    console.log(Periudha);

    console.log(typeof(Name));
    let error = []
    if (Name == "" && !Name) {
        error.push("Emri nuk munde te jete i zbrazet")
    }
    if (Periudha == 0 && !Periudha) {
        error.push("Periudha nuk duhet te jet ee zbrazet")
    }
    if (typeof(Periudha) != "number") {
        error.push("Periudha duhet te jete vetem numer")
    }

    if (error.length >= 1) {
        res.json({ error: error })
    } else {
        models.Test.update({ Name: Name, Periudha: Periudha }, {
            where: {
                id: req.body.id
            }
        }).catch((err) => {
            res.json({ error: err })
        }).then((rest) => {
            res.json({ succes: "Succes" })
        })
    }
}

const createUser = (req, res) => {
    let name = req.body.name
    let periudha = +req.body.periudha
    let Class_id = +req.body.Class_id
    let User_id = req.body.User_id
    let viti = ""

    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
    })
    if (name == "" && !name) {
        error.push("Emri nuk munde te jete i zbrazet")
    }
    if (periudha == 0 && !periudha) {
        error.push("Periudha nuk duhet te jet ee zbrazet")
    }
    if (Class_id == 0 && !Class_id) {
        error.push("Klasa nuk duhet te jet ee zbrazet")
    }
    if (User_id == 0 && !User_id) {
        error.push("User_id nuk duhet te jet ee zbrazet")
    }


    models.ClassTeacherInfo.findOne({
        where: { Class_id: Class_id, Teacher_id: User_id }
    }).then((data) => {
        console.log(data.Subject_id);
        models.Test.create({ Name: name, Periudha: periudha, Subject: data.Subject_id, Class_id: Class_id, User_id: User_id, Vititshkollor: viti }).then((resp) => {
            res.json({ resp: resp, succes: "Succes" })
        }).catch((err) => {
            res.json({ error: err })
        })
    })
}

const deleteUser = (req, res) => {
    let id = req.params.id
    console.log(id);
    models.Test.destroy({ where: { id: id } }).then(() => {
        res.json({ sucess: "Sucess" })
    })
}

module.exports = { getTestByUserId, getTestTeacher, updateTest, createUser, deleteUser }