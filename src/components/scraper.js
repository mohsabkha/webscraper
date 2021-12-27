const axios = require('axios');
const cheerio = require('cheerio');
const htmlScraper = require('./modules/htmlScraper');
const textScraper = require('./modules/textScraper');

const scraper = async(url, element=null, attributes=null, text=null) => {
    return axios.get(url)
    .then( 
        (response)=>{
            let html = response.data;
            let $ = cheerio.load(html);
            //html tags and their attributes
            if(!text){
                return htmlScraper($, element, attributes, html);
            }
            //text on the page
            else{
                return textScraper($, element, text);
            }
        },  
        (rejection)=>{
            console.log(rejection);
            return null;
        }
    )
    .catch( (error)=>{
        console.log('Axios Error:\n', error);
    })
}

module.exports = scraper;