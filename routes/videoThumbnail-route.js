const express = require("express");
const router = express.Router();
const vidThumbnailController = require("../controllers/videoThumbnail-controller");


router
  .route("/")
  .get(vidThumbnailController.getVidThumbnailList)
  .post(vidThumbnailController.createVidThumbnail);

module.exports = router;