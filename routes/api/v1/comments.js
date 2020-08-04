const express = require("express");

const router = express.Router();
const passport = require("passport");
const commentsApi = require("../../../controllers/api/v1/commnets_api");

// router.get("/", questionsApi.index);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  commentsApi.destroy
);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  commentsApi.create
);

module.exports = router;
