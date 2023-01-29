const router = require("express").Router();
const { login, signup, createTeacher, getTeachers } = require('../controllers/UserController')


router.post('/login', login)
router.post("/signUp", signup)
router.post('/', createTeacher)
router.get('/', getTeachers)


module.exports = router;