const Comment = require("../../../models/comment");
const Post = require("../../../models/post");
const Like = require("../../../models/like");

module.exports.create = async function (req, res) {
  try {
    let post = await Post.findById(req.body.post);

    if (post) {
      let comment = await Comment.create({
        content: req.body.content,
        post: req.body.post,
        user: req.body._id,
      });

      post.comments.push(comment);
      post.save();

      comment = await comment.populate("user", "name").execPopulate();

      return res.status(200).json({
        data: {
          comment: comment,
        },
        message: "Your comment is published",
        success: true,
      });
    }
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while creating answer",
    });
  }
};

module.exports.destroy = async function destroy(req, res) {
  try {
    let comment = await Comment.findById(req.params.id);

    if (comment.user == req.user.id) {
      let postId = comment.post;

      comment.remove();

      let post = Post.findByIdAndUpdate(postId, {
        $pull: { comments: req.params.id },
      });

      await Like.deleteMany({ likeable: comment._id, onModel: "Comment" });

      return res.status(200).json({
        data: {
          comment_id: req.params.id,
        },
        message: "Comment deleted",
      });
    }
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while deleting answer",
    });
  }
};
