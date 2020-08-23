const Post = require("../../../models/post");
const User = require("../../../models/user");

module.exports.home = async function (req, res) {
  try {
    // CHANGE :: populate the likes of each post and comment
    let posts = await Post.find({})
      .sort("-createdAt")
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
        populate: {
          path: "likes",
        },
      })
      .populate("likes");

    let users = await User.find({});

    return res.status(200).json({
      message: "Posts populated",
      posts: posts,
      all_users: users,
    });
  } catch (error) {
    console.log("******", error);
    return res.status(500).json({
      message: "Internal server error while populating posts",
    });
  }
};
