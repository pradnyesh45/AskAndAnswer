const express = require("express");

const router = express.Router();
const usersApi = require("../../../controllers/api/v1/users_api");
const passport = require("passport");

router.post("/signup", usersApi.create);
router.post("/login", usersApi.createSession);
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  usersApi.getUser
);
var searchText;
router.get(
  `/search?text=${searchText}`,
  passport.authenticate("jwt", { session: false }),
  usersApi.search
);
module.exports = searchText;
module.exports = router;
