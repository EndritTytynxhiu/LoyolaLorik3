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

    if (Nota < 1 && Nota > 5) {
        res.json({ error: "Nota nuk ekziston" })
    } else {
        models.TestInfo.update({ Nota: Nota }, {
            where: {
                id: req.body.id
            }
        }).catch((err) => {
            res.json({ error: "Nota nuk ekziston" })
        }).then((rest) => {
            res.json({ succes: "Succes" })
        })
    }
}

module.exports = { getTestInfo, updateTestInfo }