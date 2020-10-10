const express = require("express");

const router = express.Router();
const passport = require("passport");
const postsApi = require("../../../controllers/api/v1/posts_api");

// router.get("/", postsApi.index);
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  postsApi.create
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  postsApi.destroy
);
router.get("/", postsApi.index);

module.exports = router;
