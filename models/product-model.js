const mongoose = require("mongoose");



// LinkProduct


const productSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  urlProduct: {
    required: true,
    type: String
  },
  vidThumbnailId: {
    required: true,
    type: String,
  },
});


module.exports = mongoose.model('Product', productSchema);