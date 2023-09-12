const express = require("express");

const router = express.Router();

const { getAllUsers, getUserById } = require("../controllers/users/index");

router.get("/users", getAllUsers);
router, get("/users/:id", getUserById);

module.exports = router;
