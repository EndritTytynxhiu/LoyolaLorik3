const { getTestInfo } = require("../controllers/TestInfoController");
const router = require("express").Router();

router.post('/', getTestInfo)


module.exports = router;