const fs = require('fs');
var config = require('./config');


var http = require('http');
var https = require('https');
var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
var express = require('express');


module.exports = function () {

    // Express
    let app = express();
    //Http Server
    let server = http.createServer(app);
    //Https Server
    let credentials = { key: privateKey, cert: certificate };
    let httpsServer = https.createServer(credentials, app);


    var index = require("./../server/routes/index.route.server");
    app.use("/", index);

    //static files
    app.use(express.static('./public'));

    let serverConfig = {
        http: server,
        https: httpsServer
    }

    //return server;
    return serverConfig;
}