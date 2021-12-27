const scraper = require('./components/scraper');
const cryptoScraper = require('./examples/cyrptoScraper');

class Scrapers{
    constructor(){
        this.basicScraper = scraper;
        this.cryptoScraper = cryptoScraper;
    }
}

module.exports = Scrapers;