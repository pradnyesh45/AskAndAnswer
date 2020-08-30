const express = require("express");
const multer = require("multer");

const router = express.Router();
// const passport = require("passport");
const shopApi = require("../../../controllers/api/v1/shop_api");

router.post("/create", upload, shopApi.create);
router.get("/", shopApi.index);

module.exports = router;
