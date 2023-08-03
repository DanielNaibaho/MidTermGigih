const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment-controller");



router
  .route("/:videoId")
  .get(commentController.getCommentList)
  .post(commentController.createComment);

module.exports = router;



// //Create movie
// router.post('/post', async (req, res) => {
//     const movie = new Movie({
//         title: req.body.title,
//         year: req.body.year
//     })

//     try{
//         const movieToSave = await movie.save();
//         res.status(200).json(movieToSave)
//     } catch(error) {
//         res.status(400).json({
//             message: error.message
//         })
//     }
// })
