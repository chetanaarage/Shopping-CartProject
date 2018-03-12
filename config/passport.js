// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
var JwtBearerStrategy = require('passport-http-jwt-bearer');
const User=require('../models/user');
const config=require('../config/database');
//var passport=require('passport')


// module.exports=function(passport){
// 	var opts = {}
// 	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// 	opts.secretOrKey = config.secret;
// 	opts.issuer = 'accounts.examplesoft.com';
// 	opts.audience = 'http://localhost:3000';
// 	console.log('secret',config.secret);
// 	passport.use(new JwtStrategy(opts,function(jwt_payload, done){
// 		console.log('in passport use');
// 		User.getuserById({_id:jwt_payload._doc.id},function(err,user){
// 			if(err){
// 				return done(err,false);
// 			}
// 			if(user){
// 				return done(null,user);
// 			}else{
// 				return done(null,false);
// 			}
// 		});
// 	}));
// }

module.exports=function(passport){

passport.use(new JwtBearerStrategy(
   config.secret,
   function(token, done) {
   	console.log('token',token);
     User.getuserById({_id:token._doc._id},function(err,user){
			if(err){
				return done(err,false);
			}
			if(user){
				return done(null,user);
			}else{
				return done(null,false);
			}
		});
   }
 ));
}


 