const exrpess = require("express");
const { indexTest } = require("../controller/index.controller");
const router = exrpess.Router();

router.route("/").get(indexTest);

module.exports = router;
