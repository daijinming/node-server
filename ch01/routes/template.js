/*视图模版*/
var express = require('express');
module.exports = app => {

    /*视图模版设置*/
    var handlebars = require('express3-handlebars')
        .create({
        });

    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');

    app.use(express.static('views/public'));
    
}