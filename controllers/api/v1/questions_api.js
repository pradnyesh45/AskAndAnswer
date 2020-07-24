const Question = require("../../../models/question");

module.exports.index = async function (req, res) {
  let questions = await Question.find({}).sort("-createdAt").populate("user");

  return res.status(200).json({
    message: "List of questions",
    questions: questions,
  });
};

module.exports.destroy = async function (req, res) {
  try {
    let post = await Post.findById(req.params.id);

    // if (post.user == req.user.id) {
    post.remove();

    return res.status(200).json({
      message: "Question delete",
    });

    // } else {
    //   req.flash("error", "You cannot delete this post!");
    //   return res.redirect("back");
    // }
  } catch (err) {
    console.log("******", err);
    return res.status(200).json({
      message: "Internal server error",
    });
  }
};
