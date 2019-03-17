
let generateBrackets = function (target, brackets, variantclass) {
let bracketlements = "";
let picture; 
brackets.bracketsarray.forEach(function (element) {
    picture = element.picture? element.picture : "";
    bracketlements = bracketlements + "<div class='bcolumn col-sm-12 col-md-12 col-lg-4 col-xl-4'><div class='"+element.classes+"'>"+element.heading+element.content+picture+"</div></div>";  
});

let mainheading = brackets.mainheading? "<h1>"+brackets.mainheading+"</h1>":"";
let content = brackets.content? "<p class='bcontent'>"+brackets.content+"</p>":"";
let reddot = brackets.reddot? "<div class='reddot'></div>":"";
let subheading = brackets.subheading? "<h3>"+brackets.subheading+"</h3>":"";

$(target).append("<div class='bracketsmodule "+variantclass+"'>"+mainheading+content+subheading+"<div class='bracketscontainer container'><div class='row'>"+bracketlements+"</div></div></div>").append(reddot);
}

module.exports = generateBrackets;