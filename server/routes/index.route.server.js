"use strict";

const url           = require("url");
const querystring   = require("querystring");

//Express and set up router
let express         = require("express");
let router          = express.Router();

var http = require("http");

router.get("/api", (request, response) => {
    let query = request.query;
    console.log("/api hit!");
    response.json( query );
});


module.exports = router;