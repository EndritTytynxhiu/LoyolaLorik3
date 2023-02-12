const models = require('../models/index');
const e = require('express');
const { sequelize } = require('../models/index');

const nextYear = (req, res) => {
    let clas = {}
    let error = []

    let viti = {}
    let viti2 = req.body.viti

    models.VitiShkollor.findOne({ where: { Id: 1 } }).then(data => {
        // res.json({ data: data })
        viti = data.VitiShkollor
        console.log(viti);
        models.ClassInfo.findAll({ where: { Vititshkollor: viti } }).then(data => {
            console.log("test");
            clas = data
            console.log(data);
            // res.json(data)
            for (i of data) {
                if (i.id >= 13 && i.id <= 16) {} else if (i.id >= 25 && i.id <= 28) {} else {
                    i.Class_id += 4
                    i.Vititshkollor == viti2
                    console.log(viti);
                    console.log(i.Vititshkollor);
                    models.ClassInfo.create({ Class_id: i.Class_id, Students_id: i.Students_id, Vititshkollor: viti2 }).then(data => {
                        console.log(data)
                    }).catch(err => {
                        error.push(err)
                    })
                }
            }
            if (error.length >= 1) {
                res.json({ error: error })
            } else {
                res.json({ succes: "Succesfull" })
            }
        }).catch(err => {
            res.json(err)
            if (!err) {
                res.json({ succes: "Succesfull" })
            }
        })
    }).catch(err => {
        console.log(err);
        res.json(err)
    })
    models.VitiShkollor.update({ VitiShkollor: viti2 }, { where: { Id: 1 } }).then(data => { console.log(data) }).catch(err => {
        console.log(err)
    })



}

module.exports = { nextYear }