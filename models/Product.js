const mongoose = require('mongoose'); 
const AutoIncrement = require('mongoose-sequence')(mongoose);

const productSchema = new mongoose.Schema({
    title: {
        type: String, 
    },  
    barcodeDefault: {
        type: Number,
        default: 809000020000
    },
    // KEEP DEFAULT VALUE I'LL MANAGE FROM FRONT END

});
 
productSchema.plugin(AutoIncrement, {inc_field: 'product_barcode'});
 

const Product = mongoose.model('product', productSchema);
module.exports = Product;