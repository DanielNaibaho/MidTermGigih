const mongoose = require("mongoose");

const videoThumbnailSchema = new mongoose.Schema({
  urlVideo: {
    required: true,
    type: String,
  },

  urlImage: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('VideoThumbnail', videoThumbnailSchema);