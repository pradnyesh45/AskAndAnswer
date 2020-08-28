const express = require("express");

const router = express.Router();
// const passport = require("passport");
const shopApi = require("../../../controllers/api/v1/shop_api");

router.post("/create", shopApi.create);

module.exports = router;
