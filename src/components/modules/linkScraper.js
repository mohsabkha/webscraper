const { find } = require("domutils");

const linkScraper = ($, item) => {
    let data = [];
    $(item).find('a').each(
        function(){
            let text = `${$(this).attr('href')}`;
            if(!text.includes(':') && text.indexOf('/wiki/') === 0)
                data.push($(this).attr('href'));
        }
    )
    return data;
}

module.exports = linkScraper;