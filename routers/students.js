const router = require("express").Router();
const { getStudentClass } = require('../controllers/StudentController')

router.get('/:id', getStudentClass)

module.exports = router;