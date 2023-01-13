const router = require("express").Router();
const { getTestByUserId, getTestTeacher, updateTest } = require('../controllers/TestController')

router.post('/getTest', getTestByUserId)
router.post('/teacherGetTest', getTestTeacher)
router.put('/', updateTest)

module.exports = router;