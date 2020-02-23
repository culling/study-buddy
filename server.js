process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const serverConfig   = require('./config/express');

//console.log("serverConfig: ", serverConfig());

const httpApp   = serverConfig().http; 
const port      = 3000;
httpApp.listen(port, () => console.log(`Listening on ${port}`));

const httpsApp   = serverConfig().https; 
const httpsPort      = 3001;
httpsApp.listen(httpsPort, () => console.log(`Listening on ${httpsPort}`));


module.exports = httpApp;