const myExpress = require('express');
const Scrapers = require('./src/Scrapers');

const Scrapers = new Scrapers();

const appServer = myExpress();
const PORT = 3000;
appServer.listen(PORT, () => {
    //setInterval(async()=>{}, 60000);
    //user Scrapers object here
})