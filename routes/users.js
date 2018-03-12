const express=require('express');
var router=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
var async = require('async');
var crypto = require('crypto');
const config=require('../config/database');
const User=require('../models/user');
const Product=require('../models/product');
const Payment = require('../models/payment');
const SelectedProducts = require('../models/selectedproducts');
//const flash=require('express-flash');

//router.use(flash());

var calculatePaybleAmount=function(productId,mode,newQty,oldQty){
	console.log("in calculatePaybleAmount",newQty,oldQty);

	var price=0;
	Product.findOne({_id:productId},function(err,product){
		var oldQuantity=0;
		var quantity=parseInt(newQty);
		var Total=0;
		if(!err){
			if(product){
				console.log("if product available",product);
				price =parseFloat(product.price);
				Payment.findOne({},function(err,obj){
					if(!err){
						if(!obj && mode== "ADD"){
							console.log("in ADD method if loop")
							Total=((parseFloat(price)*quantity)).toString();
							var net_quantity=parseInt(quantity);
							obj=new Payment({Total:Total,quantity:net_quantity});
							console.log("obj",obj);
							obj.save(function (err) { console.log(' saved successfully'); });
						}
						else{
							var oldQuantity=(parseInt(obj.quantity) - 0);
							//var oldQuantity = parseInt(obj.quantity);//(parseInt(obj.quantity) - 0);
                            var q_old = parseInt(oldQty);
                            var q_new = parseInt(newQty);
                            if (mode == "ADD") {
                                quantity = parseInt(quantity);
                                Total = (parseFloat(obj.Total) + (parseFloat(price) * quantity)).toString();
                                quantity = quantity + oldQuantity;
                            }
                            else if (mode == "EDIT") {
                                quantity = oldQuantity + q_new - q_old;
                                console.log('quant-calcu: oldquanitity' + oldQuantity + ' q_new:' + q_new + '  q_old:' +q_old);
                                Total = (parseFloat(obj.Total) + (parseFloat(price) * q_new)- (parseFloat(price) * q_old)).toString();
                            }
                            else {
                                Total = (parseFloat(obj.Total) - (parseFloat(price) * quantity)).toString();
                                quantity = parseInt(obj.quantity)  - quantity;

                            }
                            Payment.findOneAndUpdate({ quantity: oldQuantity }, { $set: { quantity: quantity, Total: Total } }, { upsert: true, new: true }, function (err, doc) {
                                if (err) {
                                    console.log("Something wrong when updating data!");
                                }

                                console.log("updated" + JSON.stringify(doc));
                                console.log('payment  updated successfully');

                            });
						}
					}
				});
			}
		}

	});
}

router.post('/register',function(req,res,next){
	var newUser= new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});

	User.addUser(newUser,function(err,user){
		if(err){
			res.json({success:false,msg:'Registration failed'});
		}
		else
		{
			res.json({success:true,msg:'Registration done..!!'});
		}
	});
});


router.post('/authenticate',function(req,res,next){
	const username=req.body.username;
	const password=req.body.password;

	User.getUserByName(username,function(err,user){
		if(err) throw err;
		if(!user){return res.json({success:false,msg:'User not found'});}
		User.comparePassword(password,user.password,function(err,isMatch){
			if(err) throw err;
			if(isMatch){
				var token= jwt.sign(user,config.secret,{
				expiresIn:604800//1 week
			});
				res.json({
					success:true,
					token:'Bearer '+token ,
					user:{
						id:user._id,
						name:user.name,
						username:user.username,
						password:user.password
					}
				});
			}else{
				return res.json({success:false,msg:'Wrong password'});
			}
		});
	});
});

// router.get('/forgot', function(req, res) {
//   res.render('forgotten-password', {
//     user: req.user
//   });
// });

// var forgot = require('password-reset')({
//     uri : 'http://localhost:3000/password_reset',
//     from : 'password-robot@localhost',
//     host : 'localhost', port : 3000,
// });
// router.use(forgot.middleware);

// router.post('/forgottenPassword',function(req,res){
// 	var email = req.body.email;
//     var reset = forgot(email, function (err) {
//         if (err) res.end('Error sending message: ' + err)
//         else res.end('Check your inbox for a password reset message.')
//     });
    
//     // reset.on('request', function (req_, res_) {
//     //     req_.session.reset = { email : email, id : reset.id };
//     //     fs.createReadStream(__dirname + '/forgot.html').pipe(res_);
//     // });
// })

router.post('/forgottenPassword',function(req,res,next){
	async.waterfall([

	function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
      //console.log("token",token);
  },
  function(token, done) {
      const email=req.body.email;
	User.findOne({email:email},function(err,user){
		if (!user) {
          req.flash('error', 'No account with that email address exists.');
          return res.redirect('/forgot');
        }
        user.resetPasswordToken=token;
        user.resetPasswordExpires=Date.now() +3600000;
        console.log('user',user);
        user.save(function(err) {
        	done(err,token,user);
        });
        //console.log('user');

	});
    },
    function(token,user,done){
    	//console.log("inside token,user,done ",token,user);
		var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: "yashradhika37@gmail.com",
          pass: "yash1234"
        }
      });
		//console.log("req.headers.host ",req.headers.host);
      var mailOptions = {
        to: user.email,
        from: 'yashradhika37@gmail.com',
        subject: 'Node.js Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'https://' + 'guarded-fjord-37074.herokuapp.com' + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
      	//console.log('An e-mail has been sent to ',mailOptions);
        //req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        //done(err, 'done');
        //res.sendStatus(200);
        return res.json({success:true,token:mailOptions.token,msg:'An e-mail has been sent to ' + user.email + ' with further instructions.'});
      });

	 }

	]);

});



router.get('/profile',passport.authenticate('jwt-bearer',{session: false}),function(req,res,next){
	console.log('in users profile route');
	res.json({user:req.user});
});

router.get('/validate',function(req,res,next){
	res.send('Validate');
});


router.get('/selectedproducts',function(req,res){
	var productsArr = [];
    var productsList = [];
	Product.find({}).lean().exec(function (err, productInfo) {
		productsArr = productInfo;
		SelectedProducts.find({}).lean().exec(function (err, products) {
			//console.log("selectedproducts",products);
			for (var i = 0; i < products.length; i++) {
				///console.log("productsArr",productsArr);
                    for (var j in productsArr) {
                        if (productsArr[j]._id == products[i].id) {
                            products[i].info = productsArr[j];
                        }
                    }
                }
                productsList = products;
                //console.log("productsList",productsList);
                return res.end(JSON.stringify(productsList));
		});
	});
});


//add the product into cart bt calling selectedProducts db

router.post('/selectedproducts',function(req,res){
	var productId=req.body.id;
	var quantity=req.body.qty;

	SelectedProducts.findOne({id:productId},function(err,product){
		if(!err){
			if(!product){
				product=new SelectedProducts({id:productId,qty:quantity});
				console.log('product2:' + JSON.stringify(product));
				product.save(function (err) {
                            if (!err) {
                                calculatePaybleAmount(productId, "ADD", quantity);
                                console.log('product  saved successfully');
                            }
                        });
			}
		
		else{
			console.log('product2:' + JSON.stringify(product));

			var quant = parseInt(quantity);
			//var quant_th=qty;
            var old_quant = parseInt(product.qty);
            var totalqty=product.qty + quant;

            //console.log("var quant_th=qty;",quant_th)
            console.log('quantity:' + quant);
            SelectedProducts.findOneAndUpdate({ id: productId},{ $set: { qty: totalqty }},{ upsert: true, new: true }, function (err, doc) {
            	if (err) {
                                console.log("Something wrong when updating data!");
                         }
                calculatePaybleAmount(productId, "EDIT", quant, old_quant);
                console.log("updated" + JSON.stringify(doc));
                console.log('product  updated successfully');
            });
		}
	}
	});
	res.sendStatus(200);
});



router.post('/deleteselectedproducts',function(req,res){
	console.log("inside deleteselectedproducts");
	var productId=req.body.id;
	var qty=req.body.qty;
	console.log("deleteselectedproducts productId",productId);
	console.log("deleteselectedproducts qty",qty);
	SelectedProducts.findOneAndRemove({id:productId},function(err){
		if(err) throw err;
		calculatePaybleAmount(productId,"REMOVE",qty);
		res.sendStatus(200);
	});
});

router.post('/updateselectedproducts',function(req,res){
	console.log("inside updateselectedproducts");

	var productId=req.body.id;
	console.log("productId in updateselectedproducts",productId);
	var oldQty=req.body.oldqty;
	var newQty=req.body.newqty;
	console.log("productId,oldqty,newqty",productId,oldQty,newQty);
	SelectedProducts.findOneAndUpdate({id:productId},{ $set: { qty: newQty }},{ upsert: true, new: true },function(err,doc){
		if(err) throw err;
		calculatePaybleAmount(productId,"EDIT",newQty,oldQty);
		console.log("updated" + JSON.stringify(doc));
        console.log('product  updated successfully');
		
	});
	res.sendStatus(200);

});

router.get('/guidePrice',function(req,res){
	console.log("inside guidePrice method");
	var Total=0;
	var discount=0;
	var amount=0;
	var qty=0;
	var enableFreeDelivery = false;
    var enableDiscount = false;
    var shippingPrice = 100;
    shippingPrice = parseFloat(shippingPrice).toFixed(2);

    Payment.findOne({},function(err,obj){
    	console.log("doc in inside",obj)
    	if(!err){
    		if(obj){
    			Total=parseFloat(obj.Total);
    			qty=parseFloat(obj.quantity);
    			if(Total> 2000){
    				enableFreeDelivery=true;
    				shippingPrice=0;
    			}
    			if(qty>10){
    				enableDiscount=true;
    				discount=0.50*parseFloat(Total)
    			}
    			amount=parseFloat(Total)-parseFloat(discount) +parseFloat(shippingPrice);
    			Total=parseFloat(Total).toFixed(2);
    			discount = parseFloat(discount).toFixed(2);
                amount= parseFloat(amount).toFixed(2);
                res.status(200).json({Total:Total.toString(),discount:discount.toString(),amount:amount.toString(),enableFreeDelivery:enableFreeDelivery,enableDiscount:enableDiscount,shippingPrice:shippingPrice});

    		}
    	}

    });
    res.status(200);
});


module.exports=router;
