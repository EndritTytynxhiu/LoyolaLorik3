const { result } = require('lodash');
const models = require('../models/index');
const jwt = require('jsonwebtoken');
const e = require('express');

const login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let err = []
    if (email == "" && !email) {
        err.push("Email")
    }
    if (password == "" && !password) {
        err.push("Password")
    }
    if (password.length < 8) {
        err.push("Password")
    }
    models.User.findOne({ where: { email: email } }).then((result) => {
        console.log(result);
        if (result == null) {
            console.log(result);
            console.log("mrena ifit");
            err.push("Email")
            console.log(err);
        }
        if (err.length < 1) {
            models.User.findOne({
                where: { email: email, password: password },
                attributes: { include: ['password'] }
            }).then(result => {
                if (result) {
                    const token = jwt.sign({ result }, 'SecretKey', { expiresIn: '24h' })
                    res.json({ succes: "Succesfull", token: token, data: result })
                } else {
                    res.json({ error: "Password" })
                }
            }).catch(err => {
                console.log(err)
                res.json(err, 501)
            })

        } else {
            console.log(err);
            res.json({ error: err, succes: "Failed" })
            return
        }
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
    if (Student_password == "" && !Student_password) {
        err.push("Student_password")
    }
    if (Student_id == "" && !Student_id) {
        err.push("Student_id")
    }

    if (password.length < 8) {
        err.push("Password")
    }

    if (err.length >= 1) {
        res.json({ error: err, succes: "Failed" })
    } else {

        models.User.findOne({
            where: { email: Email }
        }).then(user => {
            if (user) {
                res.json({ error: "Email", succes: "Failed" })
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

const createTeacher = (req, res) => {

    let FirstName = req.body.FirstName
    LastName = req.body.LastName
    Email = req.body.Email
    let password = req.body.Password
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
    // if (password.length < 8) {
    //     err.push("Password")
    // }

    if (err.length >= 1) {
        res.json({ error: err, succes: "Failed" })
    } else {

        models.User.findOne({
            where: { email: Email }
        }).then(user => {
            if (user) {
                res.json({ error: "Email", succes: "Failed" })
            } else {
                models.User.create({ FirstName: FirstName, LastName: LastName, Email: Email, password: password, Role_id: 2 }).then((data) => {
                    res.json({ data: data })
                }).catch(error => {
                    err.push(error)
                    res.json({ error: err, succes: "Failed" })
                })
            }
        })
    }
}

const getTeachers = (req, res) => {
    models.User.findAll({ where: { Role_id: 2 } }).then(data => {
        res.json({ data: data })
    }).catch(error => {
        res.json({ error: error })
    })
}



module.exports = { login, signup, createTeacher, getTeachers }