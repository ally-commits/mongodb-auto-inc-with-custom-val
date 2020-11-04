const mongoose = require('mongoose'); 
const AutoIncrement = require('mongoose-sequence')(mongoose);

const partSchema = new mongoose.Schema({
    title: {
        type: String, 
    },   
});
 
partSchema.plugin(AutoIncrement, {inc_field: 'part_barcode'});
 

const Part = mongoose.model('part', partSchema);
module.exports = Part;