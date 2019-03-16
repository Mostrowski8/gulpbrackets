
//Ship object constructor
let generateBrackets = function (target, brackets) {
let bracketlements = "";
console.log(brackets)
brackets.bracketsarray.forEach(function (element) {
    bracketlements = bracketlements + "<div class='col-sm-12 col-md-4 col-lg-4 col-xl-4'><div class='"+element.classes+"'>"+element.content+"</div></div>";  
});
console.log("bracketselements is", bracketlements);

let mainheading = "<h1>"+brackets.mainheading+"<h1>";
//let bracketlements = "<div class='col-sm-12	col-md-6 col-lg-4 col-xl-4'>"+brackets[0].content+"</div>" + "<div class='col-sm-12 col-md-6 col-lg-4 col-xl-4'>TEST</div>" + "<div class='col-sm-12 col-md-6 col-lg-4	col-xl-4'>TEST</div>";

$(target).append("<div class='bracketsmodule'><div class='bracketscontainer container'><div class='row'>"+bracketlements+"</div></div></div>");



}

module.exports = generateBrackets;