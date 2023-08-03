const Product = require("../models/product-model");

exports.getProductList = async (videoId) => {
  const data = await Product.find({ vidThumbnailId: videoId });
  return data;
};

exports.createProduct = async (body, videoId) => {
  body.vidThumbnailId = videoId;
  const newProduct = await Product.create(body);
  return newProduct;
};