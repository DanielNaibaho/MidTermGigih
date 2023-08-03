const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");


router
  .route("/:videoId")
  .get(productController.getProductList)
  .post(productController.createProduct);

module.exports = router;