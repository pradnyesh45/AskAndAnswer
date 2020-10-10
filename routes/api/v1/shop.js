// const express = require("express");
// var image = require("../../../models/shop");
// const multer = require("multer");
// var imageRouter = express.Router();

// // const router = express.Router();
// // const passport = require("passport");
// // const shopApi = require("../../../controllers/api/v1/shop_api");

// // router.post("/create", shopApi.create);
// // router.get("/", shopApi.index);

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });

// ImageRouter.route("/uploadmulter").post(
//   upload.single("imageData"),
//   (req, res, next) => {
//     console.log(req.body);
//     const newImage = new Image({
//       imageName: req.body.imageName,
//       imageData: req.file.path,
//     });

//     newImage
//       .save()
//       .then((result) => {
//         console.log(result);
//         res.status(200).json({
//           success: true,
//           document: result,
//         });
//       })
//       .catch((err) => next(err));
//   }
// );

// module.exports = router;
