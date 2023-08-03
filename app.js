const express = require("express");

const vidThumbnailRoute = require("./routes/videoThumbnail-route");
const productRoute = require("./routes/product-route");
const commentRoute = require("./routes/comment-route");
const port = 3000

const app = express();

app.use(express.json());

// routes
app.use("/api/videoThumbnails", vidThumbnailRoute);
app.use("/api/products", productRoute);
app.use("/api/comments", commentRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })

module.exports = app;