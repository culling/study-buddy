var config  = require('./config');
var http    = require('http');
var express = require('express');

module.exports = function(){
    var app     = express();
    var server  = http.createServer(app);
    //API
    /*
    app.get("/api/", (req, res)=>{
        console.log("/api/ has been hit")
        res.json({name:"test", value:1});
    });
    */

   var index = require("./../server/routes/index.route.server");
   app.use("/", index);

   
   //static files
   app.use(express.static('./public'));

    //static files
    app.use(express.static('./public'));
    return server;
}