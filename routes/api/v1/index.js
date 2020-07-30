const express = require("express");

const router = express.Router();

router.use("/questions", require("./questions"));
router.use("/users", require("./users"));
router.use("/answers", require("./answers"));

module.exports = router;
