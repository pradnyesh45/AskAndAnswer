const express = require("express");

const router = express.Router();
const passport = require("passport");
const answersApi = require("../../../controllers/api/v1/answers_api");

// router.get("/", questionsApi.index);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  answersApi.destroy
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  answersApi.create
);

module.exports = router;
