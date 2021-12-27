// stores all urls in a set and traverses through them, storing any new urls that
// are encountered.

const generateUrls = (domain, data, visited, count=null) => {
    // currently set to random number, but can be set to actual incremented count.
    // set index to count if looking to recursively traverse whole site.
    // this will prevent recursive infinite loop.
    let index = Math.floor(Math.random() * (data[0].links.length - 0) + 0);
    let newUrl = `${domain}${data[0].links[index]}`;
    if(visited.includes(newUrl)){
        generateUrls(domain, data, visited);
    }
    return newUrl;
}

module.exports = generateUrls;