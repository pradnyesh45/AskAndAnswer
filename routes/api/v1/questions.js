const express = require("express");

const router = express.Router();
const questionsApi = require("../../../controllers/api/v1/questions_api");

router.get("/", questionsApi.index);
router.delete("/:id", questionsApi.destroy);

module.exports = router;
