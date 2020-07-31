const Answer = require("../../../models/answer");
const Question = require("../../../models/question");

module.exports.create = async function (req, res) {
  try {
    let question = await Question.findById(req.body.question);

    if (question) {
      let answer = await Answer.create({
        content: req.body.content,
        question: req.body.question,
        user: req.body._id,
      });

      question.answers.push(answer);
      question.save();

      answer = await answer.populate("user", "name").execPopulate();

      return res.status(200).json({
        data: {
          answer: answer,
        },
        message: "Answer created to the question",
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
    let answer = await Answer.findById(req.params.id);

    if (answer.user == req.user.id) {
      let questionId = answer.question;

      answer.remove();

      let question = Question.findByIdAndUpdate(questionId, {
        $pull: { answers: req.params.id },
      });

      return res.status(200).json({
        data: {
          answer_id: req.params.id,
        },
        message: "Answer deleted",
      });
    }
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while creating answer",
    });
  }
};
