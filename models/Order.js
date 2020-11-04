const mongoose = require('mongoose'); 

const orderSchema = new mongoose.Schema({
  title: {
    type: String, 
  },  
  allLoad: [{
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true, 
      refPath: 'allLoad.onModal'
    },
    onModal: {
      type: String,
      required: true,
      enum: ['product', 'part']
    }
  }], 
});
 
 

const Order = mongoose.model('order', orderSchema);

module.exports = Order;