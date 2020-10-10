const express = require("express");

const router = express.Router();
const likesApi = require("../../../controllers/api/v1/likes_api");

router.post("/toggle?likeable_id=:id&likeable_type=:type", likesApi.toggleLike);
// router.get("/?likeable_id=:id&likeable_type=:type", likesApi.index);

module.exports = router;
