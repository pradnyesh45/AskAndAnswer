var mongoose = require("mongoose");

const multer = require("multer");
const path = require("path");
const IMAGE_PATH = path.join("/public/uploads");

const shopSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    image: {
      type: string,
      required: true,
    },
    name: {
      type: string,
      required: true,
    },
    price: {
      type: number,
      required: true,
    },
    phone_number: {
      type: number,
      required: true,
    },
    product_name: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", IMAGE_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

// static
shopSchema.statics.uploadedImage = multer({ storage: storage }).single("image");
shopSchema.statics.imagePath = IMAGE_PATH;

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
