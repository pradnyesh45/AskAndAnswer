const Shop = require("../../../models/shop");

module.exports.create = function (req, res) {
  try {
    var shop = new Shop({
      name: req.body.name,
      price: req.body.price,
      phone_number: req.body.phone_number,
      product_name: req.body.product_name,
      image: Shop.imagePath + "/" + req.file.filename,
    });
    return res.status(200).json({
      success: true,
      data: {
        shop: shop,
      },
      message: "Photo uploaded succesfully",
    });
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while creating images",
    });
  }
};

module.exports.index = function (req, res) {
  try {
    let images = Shop.find({}).sort("-createdAt");
    return res.status(200).json({
      messages: "Display these images",
      success: true,
      data: {
        images: images,
      },
    });
  } catch (error) {
    console.log("******", error);
    return res.status(200).json({
      message: "Internal server error while fetching images",
    });
  }
};
