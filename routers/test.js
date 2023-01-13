const router = require("express").Router();
const { getTestByUserId, getTestTeacher, updateTest, createUser, deleteUser } = require('../controllers/TestController')

router.post('/getTest', getTestByUserId)
router.post('/teacherGetTest', getTestTeacher)
router.put('/', updateTest)
router.post('/create', createUser)
router.delete('/:id', deleteUser)


module.exports = router;