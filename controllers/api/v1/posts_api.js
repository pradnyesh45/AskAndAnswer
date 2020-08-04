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

// module.exports.destroy = async function (req, res) {
//   try {
//     let question = await Question.findById(req.params.id);

//     if (question.user == req.user.id) {
//       question.remove();

//       return res.status(200).json({
//         message: "Question deleted",
//       });
//     } else {
//       return res.status(401).json({
//         message: "You cannot delete this question!",
//       });
//     }
//   } catch (err) {
//     console.log("******", err);
//     return res.status(200).json({
//       message: "Internal server error while deleting question",
//     });
//   }
// };

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
      message: "Post successfully created",
    });
    // } else {
    //   return res.status(400).json({
    //     message: "Question could not be created",
    //   });
    // }
  } catch (error) {
    console.log("******", err);
    return res.status(200).json({
      message: "Internal server error while deleting question",
    });
  }
};
