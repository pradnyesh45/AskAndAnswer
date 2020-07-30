const express = require("express");

const router = express.Router();
const passport = require("passport");
const questionsApi = require("../../../controllers/api/v1/questions_api");

router.get("/", questionsApi.index);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  questionsApi.destroy
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  questionsApi.create
);

module.exports = router;
