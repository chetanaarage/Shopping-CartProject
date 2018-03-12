const mongoose=require('mongoose');
//const bcrypt=require('bcryptjs');
const config=require('../config/database');

var productSchema=mongoose.Schema({
	name:{type:String,required:true},
	description: {type:String,required:true},
	image:{type:String,required:true},
	price:{type:String,required:true}
})

const Product=module.exports=mongoose.model('Product',productSchema);
//const Cart=module.exports=mongoose.model('Book',cartSchema);

// module.exports.findById=function(id,callback){
// 	Product.findById(id,callback);
// }
module.exports.getProducts=function(callback){
	Product.find({},callback);
}

module.exports.addProduct=function(newProduct,callback){
	newProduct.save(callback);
}

