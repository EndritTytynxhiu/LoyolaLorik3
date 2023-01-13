const { getTestInfo, updateTestInfo, createTestInfo } = require("../controllers/TestInfoController");
const router = require("express").Router();

router.post('/', getTestInfo)
router.put('/', updateTestInfo)
router.post("/create", createTestInfo)



module.exports = router;