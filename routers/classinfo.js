const { InsertStudentToClasses } = require("../controllers/ClassInfo.Controller");

const router = require("express").Router();

router.post('/', InsertStudentToClasses)

module.exports = router;