const scraper = require('./scraper');
const generateUrls = require('./../utils/generateUrls');

const crawler = async (url, element=null, attributes=null, text=null, visited=null) => {
    let data = await scraper(url, element, attributes, text);
    if(!data) {
        console.log('no response');
    }
    else{
        if(!visited){
            visited = [];
        }
        let newUrl = generateUrls(main, data, visited);
        visited.push(newUrl);
        crawler(newUrl, element, attributes, text, visited);
    }
}

module.exports = crawler;