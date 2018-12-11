var express = require("express");
var cookieParser = require('cookie-parser');
var http = require('http');
var proxy = require("http-proxy-middleware");



var app = express();
app.use(cookieParser());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(
	'/api',proxy({
		target:'http://1.back.applinzi.com',
		changeOrigin:true,
		pathRewrite:{
			'^/api':''
		}
	})
);

require("./routes/system")(app);
require("./routes/template.js")(app);

var common = require("./routes/common.js");

app.use("/home/*", function (req, res, next) {
	var jwt = req.cookies.jwt;
	if (!jwt) {
		
		res.redirect('/login');
	}
	else {
		var obj = common.parseJwt(jwt);
		console.log(obj);
		next();
	}
});


app.use("/home", express.static('home'));
app.use( express.static('home'));

app.get("/",function(req,res){
	res.redirect('/home/');
});


app.listen(80, function () {

	console.log("服务开启成功");
});