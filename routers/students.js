const router = require("express").Router();
const { getStudentClass, createUser, getAllStudents } = require('../controllers/StudentController')

router.get('/:id', getStudentClass)
router.post('/', createUser)
router.get('/', getAllStudents)

module.exports = router;