const { result } = require('lodash');
const models = require('../models/index');
const jwt = require('jsonwebtoken');
const e = require('express');

const login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    models.User.findOne({
            where: { email: email, password: password },
            attributes: { include: ['password'] }
        })
        .then(result => {
            if (result) {
                const token = jwt.sign({ result }, 'SecretKey', { expiresIn: '24h' })
                res.json({ succes: "Succesfull", token: token, data: result })
            } else {
                res.json({ error: "Passwordi ose Emaili i gabuar" })
            }
        }).catch(err => {
            console.log(err)
            res.json(err, 501)
        })
}

const signup = (req, res) => {
    console.log(req.body);

    FirstName = req.body.FirstName
    LastName = req.body.LastName
    Email = req.body.Email
    let password = req.body.password
    Student_id = req.body.Student_id
    Student_password = req.body.Student_password

    let err = []

    if (FirstName == "" && !FirstName) {
        err.push("Emri nuk munde te jete i zbraset")
    }
    if (LastName == "" && !LastName) {
        err.push("Mbiemri nuk munde te jete i zbraset")
    }
    if (Email == "" && !Email) {
        err.push("Emaili nuk munde te jete i zbrazet")
    }
    if (password == "" && !password) {
        err.push("Fjalekalimi nuk munde te jet ei zbrazet")
    }
    if (Student_password == "" && !Student_password) {
        err.push("Fjalekalimi nuk munde te jet ei zbrazet")
    }
    if (Student_id == "" && !Student_id) {
        err.push("Fjalekalimi nuk munde te jet ei zbrazet")
    }

    if (password.length < 8) {
        err.push("Passwordi suhet te jete se paku 8 karaktera")
    }

    if (err.length >= 1) {
        res.json({ error: err, succes: "Failed" })
    } else {

        models.User.findOne({
            where: { email: Email }
        }).then(user => {
            if (user) {
                res.json({ error: "Emaili eshte i regjistruar", succes: "Failed" })
            } else {
                models.Student.findOne({
                    where: { id: Student_id, Password: Student_password }
                }).then(result => {
                    if (result) {
                        models.User.create({ FirstName: FirstName, LastName: LastName, Email: Email, password: password, Student_id: Student_id, Role_id: 1 }).then(result2 => {
                            const token = jwt.sign({ result2 }, "SecretKey", { expiresIn: "24h" })
                            res.json({ succes: "Succesfull", token: token, data: user })
                        }).catch(err1 => {
                            res.json({ error: err1, succes: "Failed" })
                        })

                    } else {
                        res.json({ error: "Idja ose passwordi i studentit nuk eshte i sakte", succes: "Failed" })
                    }
                }).catch(err => {
                    res.json({ error: err, succes: "Failed" })
                })
            }
        })
    }


}




module.exports = { login, signup }