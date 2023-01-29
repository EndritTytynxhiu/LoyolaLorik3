const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const getTeacherClasses = (req, res) => {
    let User_id = req.body.id
    let error = []
    let viti = ""

    if (User_id == 0 || !User_id) {
        error.push("Nuk ka User_id")
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
                console.log(User_id, viti);
                sequelize.query(`Select class.Name, class.id, classteacherinfo.Vitishkollor From users INNER JOIN classteacherinfo ON users.id = classteacherinfo.Teacher_id INNER JOIN class ON class.id = classteacherinfo.Class_id WHERE users.id = ${User_id} AND classteacherinfo.vitiShkollor = "${viti}"`).then(result => {
                    res.json({ data: result[0] })
                })
            } else {
                res.json({ error: "Perdoruesi nuk ekziston" })
            }
        }).catch((err) => {
            console.log(err);
        })
    }




}

module.exports = { getTeacherClasses }