
//Ship object constructor
let generateBrackets = function (target, brackets) {
let bracketlements = "";
let picture; 
console.log(brackets)
brackets.bracketsarray.forEach(function (element) {
    picture = element.picture? element.picture : "";
    bracketlements = bracketlements + "<div class='col-sm-12 col-md-4 col-lg-4 col-xl-4'><div class='"+element.classes+"'>"+element.heading+element.content+picture+"</div></div>";  
});
console.log("bracketselements is", bracketlements);

let mainheading = brackets.mainheading? "<h1>"+brackets.mainheading+"</h1>":"";
let subheading = brackets.subheading? "<p class='subheading'>"+brackets.subheading+"</p>":"";
//let bracketlements = "<div class='col-sm-12	col-md-6 col-lg-4 col-xl-4'>"+brackets[0].content+"</div>" + "<div class='col-sm-12 col-md-6 col-lg-4 col-xl-4'>TEST</div>" + "<div class='col-sm-12 col-md-6 col-lg-4	col-xl-4'>TEST</div>";

$(target).append("<div class='bracketsmodule'>"+mainheading+subheading+"<div class='bracketscontainer container'><div class='row'>"+bracketlements+"</div></div></div>");

}

module.exports = generateBrackets;