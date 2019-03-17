const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const drupal = require('./../img/drupal');
const wordpress = require('./../img/wordpress-icon');
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



let bluebrackets = {
  maincolor: "primary",
    mainclass: "mainclass",
    mainheading: "Heading",
    content: lorem.generateWords(6),
    subheading: false,
    reddot: true,
    bracketsarray: [
    {
        heading: "<h5>Heading</h5>",
        content: "<p>"+lorem.generateWords(10)+"</p>",
        picture: wordpress,
        classes: "bracket"
    },
    {
        heading: "<h5>Heading</h5>",
        content: "<p>"+lorem.generateWords(15)+"</p>",
        picture: "",
        classes: "bracket"
    },
    {
        heading: "<h5>Ultra Mega Super Long Heading</h5>",
        content: "<p>"+lorem.generateWords(30)+"</p>",
        picture: "",
        classes: "bracket"
    }
]}


let greybrackets = {
    maincolor: "primary",
    mainclass: "mainclass",
    mainheading: "Heading",
    content: lorem.generateWords(6),
    subheading: "Heading",
    reddot: false,
    bracketsarray: [
    {
        heading: "<h5>Heading</h5>",
        content: "<p>"+lorem.generateWords(10)+"</p>",
        picture: drupal,
        classes: "bracket"
    },
    {
        heading: "<h5>Heading</h5>",
        content: "<p>"+lorem.generateWords(15)+"</p>",
        picture: "",
        classes: "bracket"
    },
    {
        heading: "<h5>Ultra Mega Super Long Heading</h5>",
        content: "<p>"+lorem.generateWords(30)+"</p>",
        picture: "",
        classes: "bracket"
    }
]}

module.exports = [bluebrackets, greybrackets];