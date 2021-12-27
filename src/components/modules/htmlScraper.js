const linkScraper = require('./linkScraper');

const htmlScraper = ($, element, attributes, html) => {
    let data = [];
    //parse the DOM for the specific element we are looking for and store
    // all matched data in a list
    let parsedList = $(element, html)
    //for each tem found, create an object which will hold its data.
    parsedList.each(
        //check to see if attributes are present. If they are, we will need to do more filtering.
        function(index, item){
            if(!item.name) 
                return;
            if(attributes){
                for(const attribute in attributes){
                    if(typeof(attributes[attribute]) === 'object'){
                        attributes[attribute] = new Set(attributes[attribute]);
                        attributes[attribute].map(
                            function(value){
                                if(value === $(this).attr(value)){
                                    //let code = $(this).parent().html();
                                    let text = $(this).text();
                                    let attr = $(this).attr();
                                    let tag = this.name;
                                    data.push({index:index, tag:tag, attr:attr, text:text});
                                }
                            }
                        )
                    }
                    else{
                        if(attributes[attribute] === $(this).attr(attribute)){
                            //let code = $(this).parent().html()
                            let text = $(this).text();
                            let tag = this.name;
                            let links = linkScraper($, this);
                            data.push({index:index, tag:tag, attr:$(this).attr(attribute), text:text});
                        }
                    }
                } 
            }
            else{
                //let code = $(item).parent().html();
                let text = $(item).text();
                let attr = $(item).attr();
                let tag = this.name;
                data.push({tag:tag, attr:attr, text:text});
            }
            
        }
    )
    return data;
}

module.exports = htmlScraper;