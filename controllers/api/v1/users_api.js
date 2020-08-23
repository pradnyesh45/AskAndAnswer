const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const keys = require("../../../config/keys");
const bcrypt = require("bcryptjs");

// // Load input validation
// const validateRegisterInput = require("../../../validation/register");
// const validateLoginInput = require("../../../validation/login");

// // get the sign up data
// module.exports.create = async function (req, res) {

//   try {

//   } catch (error) {

//   }
//   // Form validation
//   const { errors, isValid } = validateRegisterInput(req.body);

//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   User.findOne({ email: req.body.email }).then((user) => {
//     if (user) {
//       return res.status(400).json({ email: "Email already exists" });
//     } else {
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//       });
//       // Hash password before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             // .then((user) => res.json(user))
//             .catch((err) => console.log(err));
//         });
//       });

//       // creating jsonwebtoken
//       const email = req.body.email;
//       const password = req.body.password;
//       // Find user by email
//       User.findOne({ email }).then((user) => {
//         console.log("user:", user);
//         const payload = {
//           id: user.id,
//           name: user.name,
//         };
//         // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926,
//           },
//           (err, token) => {
//             res.json({
//               message:
//                 "Sign in successful, here is your token, please keep it safe!",
//               success: true,
//               data: {
//                 token: token,
//                 user: {
//                   name: user.name,
//                   email: user.email,
//                   _id: user._id,
//                 },
//               },
//             });
//           }
//         );
//       });
//     }
//   });
// };

// // Sign in and create a session for the user
// module.exports.createSession = function (req, res) {
//   // Form validation
//   const { errors, isValid } = validateLoginInput(req.body);
//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }
//   const email = req.body.email;
//   const password = req.body.password;
//   // Find user by email
//   User.findOne({ email }).then((user) => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }
//     // Check password
//     bcrypt.compare(password, user.password).then((isMatch) => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           name: user.name,
//         };
//         // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926, // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               message:
//                 "Sign in successful, here is your token, please keep it safe!",
//               success: true,
//               data: {
//                 token: token,
//                 user: {
//                   name: user.name,
//                   email: user.email,
//                   _id: user._id,
//                 },
//               },
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// };

// coding ninjas signUp
module.exports.create = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(422).json({
        message: "Email already registered",
      });
    }

    if (!user) {
      if (req.body.password != req.body.confirm_password) {
        return res.status(422).json({
          message: "Password and confirmPassword not matching.",
        });
      }
      User.create(req.body, function (err, user) {
        return res.status(200).json({
          message: "Sign up successfull, user created",
          success: true,
          data: {
            token: jwt.sign(user.toJSON(), keys.secretOrKey, {
              expiresIn: "31556926",
            }),
            name: user.name,
            email: user.email,
            _id: user._id,
          },
        });
      });
    }
  } catch (error) {
    console.log("********", error);
    return res.json(500, {
      message: "Internal Server Error while signing up",
    });
  }
};

// coding ninjas logIn
module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.status(422).json({
        message: "Invalid username or password",
      });
    }

    return res.status(200).json({
      message: "Sign in successful, here is your token, please keep it safe!",
      success: true,
      data: {
        token: jwt.sign(user.toJSON(), keys.secretOrKey, {
          expiresIn: "31556926",
        }),
        user: {
          name: user.name,
          email: user.email,
          _id: user._id,
        },
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error while logging in",
    });
  }
};

module.exports.signUp = function (req, res) {};
