const { nextYear } = require("../controllers/VitiShkollorController");
const router = require("express").Router();

router.post('/', nextYear)


module.exports = router;