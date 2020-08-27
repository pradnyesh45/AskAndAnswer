const Friendship = require("../../../models/friendship");
const User = require("../../../models/user");

module.exports.addFriend = async function (req, res) {
  try {
    from_user = await User.findOne(payload.user_id);
    friendship.create({
      from_user: from_user,
      to_user: req.params.id,
    });
    user.friendships.push(to_user);
    user.save();
    return res.status(200).json({
      message: `Now you're friends with ${to_user.name}`,
      success: true,
      data: {
        friendship: {
          to_user: {
            _id: to_user._id,
            email: to_user.email,
            name: to_user.name,
          },
          from_user: {
            id: from_user._id,
            email: from_user.email,
            name: from_user.name,
          },
        },
      },
    });
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while creating friendship",
    });
  }
};

module.exports.userFriends = async function (req, res) {
  try {
    let user = await User.findById(payload.user_id);
    if (user) {
      let friendships = user.friendships;
      return res.status(200).json({
        message: `List of friends for user id ${user.id}`,
        success: true,
        data: {
          friends: friendships,
        },
      });
    }
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while listing friends of user",
    });
  }
};

module.exports.removeFriend = function (req, res) {
  try {
    // let to_user = req.params.user_id;
    user.id.Friendship.req.params.user_id.remove();
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while deleting answer",
    });
  }
};
