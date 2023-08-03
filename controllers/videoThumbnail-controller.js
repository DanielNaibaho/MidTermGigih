const videoThumbnailService = require("../services/videoThumbnail-service");

exports.getVidThumbnailList = async (req, res) => {
  try {
    const data = await videoThumbnailService.getVidThumbnailList();
    res.status(200).json({
      status: "success",
      data: {
        vidThumbnailList: data,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createVidThumbnail = async (req, res) => {
  try {
    const data = await videoThumbnailService.createVidThumbnail(req.body);
    res.status(200).json({
      status: "success",
      data: {
        videoThumbnail: data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "bad request",
      message: err.message,
    });
  }
};