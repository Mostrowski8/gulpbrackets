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
    subheading: lorem.generateWords(6),
    bracketsarray: [
    {
        heading: "<h5>"+lorem.generateWords(1)+"</h5>",
        content: "<p>"+lorem.generateWords(10)+"</p>",
        picture: "<svg width='60' height='60' viewBox='0 0 256 255' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet'><path d='M18.124 127.5c0 43.296 25.16 80.711 61.646 98.442L27.594 82.986a108.965 108.965 0 0 0-9.47 44.514zm183.221-5.52c0-13.517-4.856-22.879-9.02-30.165-5.545-9.01-10.742-16.64-10.742-25.65 0-10.055 7.626-19.415 18.368-19.415.485 0 .944.06 1.417.088-19.46-17.829-45.387-28.714-73.863-28.714-38.213 0-71.832 19.606-91.39 49.302 2.566.077 4.984.13 7.039.13 11.44 0 29.15-1.387 29.15-1.387 5.897-.348 6.592 8.312.702 9.01 0 0-5.926.697-12.52 1.042L100.32 194.7l23.937-71.79-17.042-46.692c-5.89-.345-11.47-1.042-11.47-1.042-5.894-.346-5.203-9.358.691-9.01 0 0 18.064 1.388 28.811 1.388 11.44 0 29.151-1.388 29.151-1.388 5.9-.348 6.594 8.312.702 9.01 0 0-5.938.697-12.52 1.042l39.529 117.581 10.91-36.458c4.728-15.129 8.327-25.995 8.327-35.36zm-71.921 15.088l-32.818 95.363a109.376 109.376 0 0 0 30.899 4.456c12.737 0 24.952-2.202 36.323-6.2a9.605 9.605 0 0 1-.779-1.507l-33.625-92.112zm94.058-62.045c.47 3.484.737 7.224.737 11.247 0 11.1-2.073 23.577-8.317 39.178l-33.411 96.6c32.518-18.963 54.39-54.193 54.39-94.545.002-19.017-4.856-36.9-13.4-52.48zM127.505 0C57.2 0 0 57.196 0 127.5c0 70.313 57.2 127.507 127.505 127.507 70.302 0 127.51-57.194 127.51-127.507C255.014 57.196 197.808 0 127.506 0zm0 249.163c-67.08 0-121.659-54.578-121.659-121.663 0-67.08 54.576-121.654 121.659-121.654 67.078 0 121.652 54.574 121.652 121.654 0 67.085-54.574 121.663-121.652 121.663z' fill='#464342'/></svg>",
        classes: "bracket"
    },
    {
        heading: "<h5>"+lorem.generateWords(1)+"</h5>",
        content: "<p>"+lorem.generateWords(15)+"</p>",
        picture: "",
        classes: "bracket"
    },
    {
        heading: "<h5>"+lorem.generateWords(7)+"</h5>",
        content: "<p>"+lorem.generateWords(30)+"</p>",
        picture: "",
        classes: "bracket"
    }
]}

module.exports = brackets;