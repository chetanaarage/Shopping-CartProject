var mongoose = require('mongoose');

var selectedProductSchema = mongoose.Schema({
    id: String,
    // p_sizecode: String,
    // p_colorcode: String,
    qty: Number
});

var SelectedProducts = mongoose.model('SelectedProducts', selectedProductSchema);

module.exports = SelectedProducts;