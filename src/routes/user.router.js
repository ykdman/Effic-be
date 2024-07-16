const express = require("express");
const router = express.Router();

const { getUser } = require("../controller/user.controller");

router.route("/").get(getUser);

module.exports = router;
