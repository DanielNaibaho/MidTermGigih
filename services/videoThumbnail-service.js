const VidThumbnail = require("../models/videoThumbnail-model");

exports.getVidThumbnailList = async () => {
  const vidThumbnailList = await VidThumbnail.find();
  return vidThumbnailList;
};

exports.createVidThumbnail = async (body) => {
  const vidThumbnailPieces = {
    products: [],
    comment: [],
  };

  const vidThumbnailFull = Object.assign(body, vidThumbnailPieces);

  const newVidThumbnail = await VidThumbnail.create(vidThumbnailFull);

  return newVidThumbnail;
};