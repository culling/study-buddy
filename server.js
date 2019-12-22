process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express   = require('./config/express');
const app       = express(); 

const port      = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
module.exports = app;