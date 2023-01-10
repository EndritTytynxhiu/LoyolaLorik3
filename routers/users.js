const router = require("express").Router();
const { login, signup } = require('../controllers/UserController')


router.post('/login', login)
router.post("/signUp", signup)

module.exports = router;