const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });


let brackets = {
    maincolor: "primary",
    mainclass: "mainclass",
    mainheading: lorem.generateWords(1),
    bracketsheadingcontent: "<h4>"+lorem.generateWords(1)+"</h4>",
    bracketsarray: [
    {
        content: "<h5>"+lorem.generateWords(1)+"</h5><p>"+lorem.generateWords(10)+"</p>",
        picture: "",
        classes: "bracket"
    },
    {
        content: "lorem1 fadsgsdgggggggggggggggggggggggggggg",
        picture: "",
        classes: "bracket"
    },
    {
        content: "lorem1 fadsgsdgggggggggggggggggggggggggggg",
        picture: "",
        classes: "bracket"
    }
]}

module.exports = brackets;