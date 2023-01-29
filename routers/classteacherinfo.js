const { InsertTeacherToClasses } = require("../controllers/ClassTeacherInfo.Controller");
const router = require("express").Router();

router.post('/', InsertTeacherToClasses)

module.exports = router;