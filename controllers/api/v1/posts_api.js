const Post = require("../../../models/post");

module.exports.index = async function (req, res) {
  let posts = await Post.find({})
    .sort("-createdAt")
    .populate("user")
    .populate({ path: "comments", populate: { path: "user" } });

  return res.status(200).json({
    message: "List of posts",
    posts: posts,
  });
};

module.exports.destroy = async function (req, res) {
  try {
    let post = await Post.findById(req.params.id);

    if (post.user == req.user.id) {
      await Like.deleteMany({ likeable: post, onModel: "Post" });
      await Like.deleteMany({ _id: { $in: post.comments } });

      post.remove();

      await Comment.deleteMany({ post: req.params.id });

      return res.json(200, {
        message: "Post and associated comments deleted successfully!",
      });
    } else {
      return res.json(401, {
        message: "You cannot delete this post!",
      });
    }
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.create = async function (req, res) {
  // let isCreated = false;
  try {
    let post = await Post.create({
      content: req.body.content,
      user: req.user._id,
      // isCreated: true,
    });
    post = await post.populate("user", "name").execPopulate();
    // if (isCreated) {
    return res.status(200).json({
      success: true,
      data: {
        post: post,
      },
      message: "Post created",
    });
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while deleting question",
    });
  }
};
