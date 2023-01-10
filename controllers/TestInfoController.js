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

module.exports = { getTestInfo }