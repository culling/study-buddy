"use strict";

const url           = require("url");
const querystring   = require("querystring");

//Express and set up router
let express         = require("express");
let router          = express.Router();
let path            = require("path");

router.get("/api", (request, response) => {
    let query = request.query;
    console.log("/api hit!");
    response.json( query );
});

router.get("/studysession", (request, response) => {
    console.log("/studysession hit!");
    response.sendfile( path.join(__dirname+"./../../public/studySession.html") );
});


module.exports = router;