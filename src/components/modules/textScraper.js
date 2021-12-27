const textScraper = ($, element, text) => {
    let data = [];
    $(`${element}:contains("${text}")`).each(
        function(index, el){
            if(!this.name) return;
            data.push({index:index, tag:this.name, attributes:$(this).attr(), text:$(this).text(), code:$(this).html});
        }
    );
    return data;
}

module.exports = textScraper;