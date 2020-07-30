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
    let question = await Question.findById(req.params.id);

    if (question.user == req.user.id) {
      question.remove();

      return res.status(200).json({
        message: "Question deleted",
      });
    } else {
      return res.status(401).json({
        message: "You cannot delete this question!",
      });
    }
  } catch (err) {
    console.log("******", err);
    return res.status(200).json({
      message: "Internal server error while deleting question",
    });
  }
};

module.exports.create = async function (req, res) {
  // let isCreated = false;
  try {
    let question = await Question.create({
      content: req.body.content,
      user: req.user._id,
      // isCreated: true,
    });
    // if (isCreated) {
    return res.status(200).json({
      message: "Question successfully created",
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
