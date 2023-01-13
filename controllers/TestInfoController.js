const models = require('../models/index');
const { sequelize } = require('../models/index');


const getTestInfo = (req, res) => {
    let Test_id = req.body.id
    let error = []

    if (Test_id == 0 && !Test_id) {
        error.push("Nuk ka Test_id")
    }

    if (error.length >= 1) {
        res.json({ error: error })
    } else {
        sequelize.query(`Select test_info.id, test_info.student_id, CONCAT(students.FirstName, " ", students.LastName) AS Emri, test_info.Nota From students INNER JOIN test_info ON test_info.student_id = students.id WHERE test_info.test_id=${Test_id}`).then((result) => {
            if (result) {
                res.json({ data: result[0] })
            } else {
                res.json({ error: "Testi nuk ekziston" })
            }
        }).catch((err) => {
            res.json({ error: err })
        })
    }
}

const updateTestInfo = (req, res) => {
    let Nota = req.body.Nota
    console.log(typeof(Nota));
    let error = []
    if (Nota == 0 && !Nota) {
        error.push("Nuk ka note")
    }

    if (Nota >= 1 && Nota <= 5) {
        models.TestInfo.update({ Nota: Nota }, {
            where: {
                id: req.body.id
            }
        }).catch((err) => {
            res.json({ error: "Nota nuk ekziston" })
        }).then((rest) => {
            res.json({ succes: "Succes" })
        })
    } else {
        res.json("Nota nuk ekziston")
    }
}

const createTestInfo = (req, res) => {
    let test_id = +req.body.id
    let student_idarr = req.body.studentarr
    let Nota_arr = req.body.Nota_arr
    let Nota = []
    error = []

    for (i of student_idarr) {
        console.log(i);
        models.Student.findOne({ where: { id: i } }).then((data) => {
            if (!data) {
                error.push("Studenti nuk ekziston")
            }
        })
    }
    for (i in Nota_arr) {
        Nota_arr[i] = +Nota_arr[i]
        Nota.push(Nota_arr[i])
        if (Nota_arr[i] < 0 || Nota_arr[i] > 5) {
            error.push(`Nota e ${i} nuk ekziston`)
        }
    }

    if (error.length >= 1) {
        res.json({ error: error, succes: "Failed" })
    } else {
        for (i in student_idarr) {
            models.TestInfo.create({ test_id: test_id, student_id: student_idarr[i], Nota: Nota[i] }).catch((err) => {
                error.push(err)
            })
        }
        if (error.length >= 1) {
            res.json({ error: error })
        } else {
            res.json({ sucess: "Succes" })
        }
    }
}

module.exports = { getTestInfo, updateTestInfo, createTestInfo }