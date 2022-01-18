# webscraper
flexible web scraper with basic web crawler

## uses
To use the webscraper, create a new Scrapers Object in the node listener.
Then call its basicScraper function.

The basicScraper takes 4 arguments:
1) the url as a string
2) the element you want to search for as a string, or elements you want to search for as an array of string values
3) the attributes of that element as an object of string keys with either a string value or array of string values
4) specific text you wish to search for as a string

##### NOTE: If you pass in a value for the text argument (other than null or undefined), the elements argument and the attributes argument will not be processed.

```
const createdScraper = new Scrapers();
newScraper.basicScraper(url: String, elements: String or [String], attributesObject: {}, text: String); // returns as array of all matched html elements
```
