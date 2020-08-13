const express = require("express");

const router = express.Router();
const usersApi = require("../../../controllers/api/v1/users_api");

router.post("/signup", usersApi.create);
router.post("/login", usersApi.createSession);

module.exports = router;
