const commentService = require("../services/comment-service");

exports.getCommentList = async (req, res) => {
  try {
    const data = await commentService.getCommentList(req.params.videoId);
    res.status(200).json({
      status: "Berhasil",
      data: {
        comments: data,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createComment = async (req, res) => {
  try {
    const data = await commentService.createComment(
      req.body,
      req.params.videoId
    );
    res.status(200).json({
      status: "Berhasil",
      data: {
        comment: data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};