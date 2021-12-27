const scraper = require('../components/scraper')
const createCsvWriter= require('csv-writer').createObjectCsvWriter;


// function to scrape crypto data as an example
const cryptoScraper = (arrayOfCryptos) => {
    let url = 'https://crypto.com/price/';
    const csvWriterArray = [];
    let csvObject = [];
    // make a csv writer for each crypto and pass it to the csvWriterArray
    arrayOfCryptos.forEach((el,index) => {
        csvWriterArray.push(
            createCsvWriter({
                path:`data/${el}.csv`, 
                header:[
                    {id: `${el}`, title: `${el}`},
                    {id: `price`, title: `Price`},
                    {id: `date`, title: `Date`}
                ]})
        )
    })
 
    // create a function to run async code correctly
    async function runner() {
        let timeStamp = Date.now();
        // go over the passed in cryptos in a for each loop
        arrayOfCryptos.forEach((el, index) => {
            // scrape for price
            scraper(`${url}${el}`, 'span', {'class':'chakra-text css-urtgp9'})
            // create a csv object and push to csvObject array
            .then((response) => {
                csvObject.push([{
                    name: el,
                    price: response[0].text,
                    date: timeStamp
                }]);
            })
            .catch((error) => {console.log(error)});  
            return {status: 'Success'};
        })
    }

    //create interval function to gather data
    setInterval(async () =>{
        await runner()
        .then( (response) => {
            // write csv file for each crypto
            csvWriterArray.forEach((el, index) => {
                if(`${el.csvStringifier.header[0].id}` === `${csvObject[index][0].name}`){
                    el.writeRecords(csvObject[index])
                    .then(() => {})
                    .catch((error) => {console.log('IN WRITING: ', error)})
                }
            })
        })  
        .catch((error) => {console.log('POST RUNNER: ', error)})
        scrapedCryptoData = [];
        csvObject = [];
    }, 2000);
}

module.exports = cryptoScraper;