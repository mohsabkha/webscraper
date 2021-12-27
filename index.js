const myExpress = require('express');
const ScraperExamples = require('./src/ScraperExamples');

let example = new ScraperExamples();

const appServer = myExpress();
const PORT = 3000;
appServer.listen(PORT, () => {
    //setInterval(async()=>{}, 60000);
    
})