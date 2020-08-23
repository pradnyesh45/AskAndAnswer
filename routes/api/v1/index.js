const express = require("express");

const router = express.Router();
const homeApi = require("../../../controllers/api/v1/home_api");

router.get("/", homeApi.home);
router.use("/users", require("./users"));
router.use("/posts", require("./posts"));
router.use("/comments", require("./comments"));
router.use("/likes", require("./likes"));

module.exports = router;
