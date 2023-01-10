const router = require("express").Router();
const { getTestByUserId, getTestTeacher } = require('../controllers/TestController')

router.post('/getTest', getTestByUserId)
router.post('/teacherGetTest', getTestTeacher)


module.exports = router;