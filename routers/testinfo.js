const { getTestInfo, updateTestInfo } = require("../controllers/TestInfoController");
const router = require("express").Router();

router.post('/', getTestInfo)
router.put('/', updateTestInfo)



module.exports = router;