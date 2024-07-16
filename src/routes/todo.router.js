const express = require("express");
const { getTodos } = require("../controller/todo.controller");
const router = express.Router();

router.route("/").get(getTodos);

module.exports = router;
