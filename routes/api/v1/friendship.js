const express = require("express");

const router = express.Router();
const passport = require("passport");
const friendshipApi = require("../../../controllers/api/v1/friendship_api");

// router.get("/", questionsApi.index);
// router.post(
//   "/create_friendship?user_id=:id",
//   passport.authenticate("jwt", { session: false }),
//   friendshipApi.friend
// );
// router.delete(
//   "/destroy/:id",
//   passport.authenticate("jwt", { session: false }),
//   commentsApi.destroy
// );
router.post(
  "/create_friendship?user_id=:id",
  passport.authenticate("jwt", { session: false }),
  friendshipApi.addFriend
);
router.get(
  "/fetch_user_friends",
  passport.authenticate("jwt", { session: false }),
  friendshipApi.userFriends
);
router.post(
  "/remove_friendship/:id",
  passport.authenticate("jwt", { session: false }),
  friendshipApi.removeFriend
);

module.exports = router;
