const Comment = require("../models/comment-model");

exports.getCommentList = async (videoId) => {
  const data = await Comment.find({ vidThumbnailId: videoId });
  return data;
};

exports.createComment = async (body, videoId) => {
  body.vidThumbnailId = videoId;
  body.timestamp = new Date();
  const data = Comment.create(body);
  return data;
};