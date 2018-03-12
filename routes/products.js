const express=require('express');
var router=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');
const Product=require('../models/product');



router.post('/addproduct',function(req,res,next){
	var newProduct= new Product({
		name:req.body.name,
		description:req.body.description,
		image:req.body.image,
		price:req.body.price
	});

	Product.addProduct(newProduct,function(err,product){
		if(err){
			res.json({success:false,msg:'adding product failed'});
		}
		else
		{
			res.json({success:true,msg:'product added..!!'});
		}
	});
});

router.get('/getproducts',function(req,res,next){
	Product.getProducts(function(err,product){
		if(err){
			res.json({success:false,msg:'no products'});
		}else{
			//console.log(product);
			res.json({success:true,product:product});
		}
	})
});



module.exports=router;