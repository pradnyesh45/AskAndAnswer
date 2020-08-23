const express = require("express");

const router = express.Router();
const likesApi = require("../../../controllers/api/v1/likes_api");

router.post("/toggle", likesApi.toggleLike);

module.exports = router;
