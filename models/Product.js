const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({
  title: {
    type: String, 
  }, 
});
 
 

const Product = mongoose.model('product', productSchema);

module.exports = Product;