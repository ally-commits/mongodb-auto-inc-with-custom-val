const mongoose = require('mongoose'); 

const partSchema = new mongoose.Schema({
  title: {
    type: String, 
  }, 
});
 
 

const Part = mongoose.model('part', partSchema);

module.exports = Part;