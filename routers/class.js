const router = require("express").Router();
const { getTeacherClasses } = require('../controllers/ClassController')

router.post('/', getTeacherClasses)

module.exports = router;