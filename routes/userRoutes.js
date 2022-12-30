const express = require("express");
const router = express.Router();

const user = require("../controller/userController");

router.post("/add/user", user.addUser);

router.get("/get/users", user.getUsersList);

module.exports = router;
