(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COPY = void 0;
var COPY = {
  DARWIN: "pbcopy",
  LINUX: "xclip -selection clipboar",
  WIN32: "clip"
};
exports.COPY = COPY;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CANNOT_DETERMINE_PLATFORM = void 0;
var CANNOT_DETERMINE_PLATFORM = "Could not determine host operating system.";
exports.CANNOT_DETERMINE_PLATFORM = CANNOT_DETERMINE_PLATFORM;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FORMATS = exports.FORMAT_PLAIN = exports.FORMAT_HTML = void 0;
var FORMAT_HTML = "html";
exports.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
exports.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
exports.FORMATS = FORMATS;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
exports.LINE_ENDINGS = LINE_ENDINGS;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
exports.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
exports.WORDS = WORDS;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LoremIpsum", {
  enumerable: true,
  get: function get() {
    return _LoremIpsum.default;
  }
});
exports.loremIpsum = void 0;

var _words = require("./constants/words");

var _LoremIpsum = _interopRequireDefault(require("./lib/LoremIpsum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "plain" : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? "sentences" : _ref$units,
      _ref$words = _ref.words,
      words = _ref$words === void 0 ? _words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum.default(options, format, suffix);

  switch (units) {
    case "paragraphs":
    case "paragraph":
      return lorem.generateParagraphs(count);

    case "sentences":
    case "sentence":
      return lorem.generateSentences(count);

    case "words":
    case "word":
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;

},{"./constants/words":7,"./lib/LoremIpsum":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formats = require("../constants/formats");

var _lineEndings = require("../constants/lineEndings");

var _generator = _interopRequireDefault(require("../lib/generator"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoremIpsum =
/*#__PURE__*/
function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    _defineProperty(this, "generator", void 0);

    _defineProperty(this, "format", void 0);

    _defineProperty(this, "suffix", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.format = format.toLowerCase();
    this.suffix = suffix;
    this.generator = new _generator.default(options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
exports.default = _default;

},{"../constants/formats":4,"../constants/lineEndings":5,"../lib/generator":10,"../util":16}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _words = require("../constants/words");

var _util = require("../util");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Generator =
/*#__PURE__*/
function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random,
        seed = _ref.seed,
        _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck(this, Generator);

    _defineProperty(this, "sentencesPerParagraph", void 0);

    _defineProperty(this, "wordsPerSentence", void 0);

    _defineProperty(this, "random", void 0);

    _defineProperty(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;

    if (random) {
      this.random = random;
    } else {
      this.random = Math.random;
    }
  }

  _createClass(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default = Generator;
exports.default = _default;

},{"../constants/words":7,"../util":16}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */
var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default = capitalize;
exports.default = _default;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _child_process = require("child_process");

var _ = require(".");

/**
 * Copy text to the clipboard using a platform's native command.
 * @param  text  The text to copy.
 * @returns      A promise that resolves with the text to copy.
 */
var copyToClipboard = function copyToClipboard(text) {
  return new Promise(function (resolve, reject) {
    try {
      var platform = (0, _.getPlatform)();

      if ((0, _.isSupportedPlatform)(platform) === false) {
        throw new Error("Copy is not supported for ".concat(platform));
      }

      var command = "echo \"".concat(text, "\" | ").concat((0, _.getCopyCommand)(platform));
      (0, _child_process.exec)(command, function (error, stdout, stderr) {
        /* istanbul ignore if */
        if (error) {
          return reject(error);
        }

        if (stderr) {
          return reject(new Error(stderr));
        }

        return resolve(text);
      });
    } catch (error) {
      return reject(error);
    }
  });
};

var _default = copyToClipboard;
exports.default = _default;

},{".":16,"child_process":1}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _commands = require("../constants/commands");

var _platforms = require("../constants/platforms");

/**
 * @param platform  The process platform.
 * @returns         The copy command for the process platform.
 */
var getCopyCommand = function getCopyCommand() {
  var platform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  switch (platform.toLowerCase()) {
    case _platforms.SUPPORTED_PLATFORMS.DARWIN:
      return _commands.COPY.DARWIN;

    case _platforms.SUPPORTED_PLATFORMS.WIN32:
      return _commands.COPY.WIN32;

    case _platforms.SUPPORTED_PLATFORMS.LINUX:
    default:
      return _commands.COPY.LINUX;
  }
};

var _default = getCopyCommand;
exports.default = _default;

},{"../constants/commands":2,"../constants/platforms":6}],14:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../constants/errors");

/**
 * @returns  The process platform.
 * @throws
 */
var getPlatform = function getPlatform() {
  if (!process || typeof process.platform !== "string") {
    throw new Error(_errors.CANNOT_DETERMINE_PLATFORM);
  }

  return process.platform;
};

var _default = getPlatform;
exports.default = _default;

}).call(this,require('_process'))
},{"../constants/errors":3,"_process":24}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _package = require("../../package.json");

/**
 * @returns  The package version.
 */
var getVersion = function getVersion() {
  return _package.version;
};

var _default = getVersion;
exports.default = _default;

},{"../../package.json":23}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "capitalize", {
  enumerable: true,
  get: function get() {
    return _capitalize.default;
  }
});
Object.defineProperty(exports, "copyToClipboard", {
  enumerable: true,
  get: function get() {
    return _copyToClipboard.default;
  }
});
Object.defineProperty(exports, "getCopyCommand", {
  enumerable: true,
  get: function get() {
    return _getCopyCommand.default;
  }
});
Object.defineProperty(exports, "getPlatform", {
  enumerable: true,
  get: function get() {
    return _getPlatform.default;
  }
});
Object.defineProperty(exports, "getVersion", {
  enumerable: true,
  get: function get() {
    return _getVersion.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function get() {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isReactNative", {
  enumerable: true,
  get: function get() {
    return _isReactNative.default;
  }
});
Object.defineProperty(exports, "isSupportedPlatform", {
  enumerable: true,
  get: function get() {
    return _isSupportedPlatform.default;
  }
});
Object.defineProperty(exports, "isWindows", {
  enumerable: true,
  get: function get() {
    return _isWindows.default;
  }
});
Object.defineProperty(exports, "makeArrayOfLength", {
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength.default;
  }
});
Object.defineProperty(exports, "makeArrayOfStrings", {
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings.default;
  }
});

var _capitalize = _interopRequireDefault(require("./capitalize"));

var _copyToClipboard = _interopRequireDefault(require("./copyToClipboard"));

var _getCopyCommand = _interopRequireDefault(require("./getCopyCommand"));

var _getPlatform = _interopRequireDefault(require("./getPlatform"));

var _getVersion = _interopRequireDefault(require("./getVersion"));

var _isNode = _interopRequireDefault(require("./isNode"));

var _isReactNative = _interopRequireDefault(require("./isReactNative"));

var _isSupportedPlatform = _interopRequireDefault(require("./isSupportedPlatform"));

var _isWindows = _interopRequireDefault(require("./isWindows"));

var _makeArrayOfLength = _interopRequireDefault(require("./makeArrayOfLength"));

var _makeArrayOfStrings = _interopRequireDefault(require("./makeArrayOfStrings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./capitalize":11,"./copyToClipboard":12,"./getCopyCommand":13,"./getPlatform":14,"./getVersion":15,"./isNode":17,"./isReactNative":18,"./isSupportedPlatform":19,"./isWindows":20,"./makeArrayOfLength":21,"./makeArrayOfStrings":22}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @returns  True if the runtime is NodeJS.
 */
var isNode = function isNode() {
  return typeof module !== "undefined" && !!module.exports;
};

var _default = isNode;
exports.default = _default;

},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @returns  True if runtime is ReactNative.
 */
var isReactNative = function isReactNative() {
  return typeof navigator !== "undefined" && navigator.product === "ReactNative";
};

var _default = isReactNative;
exports.default = _default;

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _platforms = require("../constants/platforms");

/**
 * @param platform  The process platform.
 * @returns         True if the process platform is supported.
 */
var isSupportedPlatform = function isSupportedPlatform(platform) {
  return Object.values(_platforms.SUPPORTED_PLATFORMS).indexOf(platform.toLowerCase()) !== -1;
};

var _default = isSupportedPlatform;
exports.default = _default;

},{"../constants/platforms":6}],20:[function(require,module,exports){
(function (process){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _platforms = require("../constants/platforms");

/**
 * @returns True if process is windows.
 */
var isWindows = function isWindows() {
  return typeof process !== "undefined" && process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
};

var _default = isWindows;
exports.default = _default;

}).call(this,require('_process'))
},{"../constants/platforms":6,"_process":24}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */
var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default = makeArrayOfLength;
exports.default = _default;

},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = require(".");

/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */
var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, _.makeArrayOfLength)(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default = makeArrayOfStrings;
exports.default = _default;

},{".":16}],23:[function(require,module,exports){
module.exports={
  "_from": "lorem-ipsum",
  "_id": "lorem-ipsum@2.0.0",
  "_inBundle": false,
  "_integrity": "sha512-MgsNPLB49Zwk2ah8kSG5T3X75JQsEC3tsI7QsWORuiIe2DTUq4b9QXSG7dkjHoO1lKKaxVM69MNiVssTfp+zGQ==",
  "_location": "/lorem-ipsum",
  "_phantomChildren": {},
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "lorem-ipsum",
    "name": "lorem-ipsum",
    "escapedName": "lorem-ipsum",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/lorem-ipsum/-/lorem-ipsum-2.0.0.tgz",
  "_shasum": "e7b8807bcd9ff9e5e9b23abc6c432e8596dbc24b",
  "_spec": "lorem-ipsum",
  "_where": "C:\\Users\\mostr\\repos\\testa",
  "author": {
    "name": "Nickolas Kenyeres",
    "email": "nkenyeres@gmail.com",
    "url": "http://knicklabs.github.com"
  },
  "bin": {
    "lorem-ipsum": "dist/bin/lorem-ipsum.bin.js"
  },
  "bugs": {
    "url": "https://github.com/knicklabs/node-lorem-ipsum/issues"
  },
  "bundleDependencies": false,
  "dependencies": {
    "commander": "^2.17.1"
  },
  "deprecated": false,
  "description": "Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, and React Native.",
  "devDependencies": {
    "@babel/cli": "^7.2.0",
    "@babel/core": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.2.1",
    "@babel/plugin-proposal-object-rest-spread": "^7.2.0",
    "@babel/plugin-transform-modules-commonjs": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "@babel/preset-typescript": "^7.1.0",
    "@types/jest": "^23.3.1",
    "@types/node": "^10.9.3",
    "@types/random-seed": "^0.3.3",
    "babel-loader": "^8.0.0",
    "coveralls": "^3.0.2",
    "jest": "^24.1.0",
    "nock-exec": "^0.1.0",
    "nyc": "^13.3.0",
    "prettier": "^1.14.2",
    "release-it": "^10.1.0",
    "ts-jest": "^23.1.4",
    "tslint": "^5.11.0",
    "typescript": "^3.2.2"
  },
  "engines": {
    "node": ">= 8.x",
    "npm": ">= 5.x"
  },
  "homepage": "https://github.com/knicklabs/node-lorem-ipsum#readme",
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.ts",
      "!src/bin/**/*.ts",
      "!src/constants/cli.ts",
      "!src/constants/regex.ts",
      "!src/@types/**/*.d.ts"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ]
  },
  "keywords": [
    "lorem",
    "ipsum",
    "placeholder",
    "text",
    "dummy",
    "filler"
  ],
  "license": "ISC",
  "main": "dist/index",
  "name": "lorem-ipsum",
  "repository": {
    "type": "git",
    "url": "git://github.com/knicklabs/node-lorem-ipsum.git"
  },
  "scripts": {
    "build": "npm run build:types && npm run build:js && npm run build:exec",
    "build:exec": "sed -i '1i #!/usr/bin/env node' dist/bin/lorem-ipsum.bin.js",
    "build:js": "rm -rf dist && babel src --ignore '**/*.test.ts' --out-dir dist --extensions \".ts,.tsx\" --source-maps inline",
    "build:types": "rm -rf types && tsc --emitDeclarationOnly",
    "coverage": "nyc report --temp-directory=coverage --reporter=text-lcov | coveralls",
    "lint:check": "tslint -c tslint.json src/**/*.ts",
    "release": "npm run build && release-it",
    "release:dry": "npm run build && release-it --dry-run",
    "test": "jest --coverage",
    "type-check": "tsc --noEmit"
  },
  "types": "types/index.d.ts",
  "version": "2.0.0"
}

},{}],24:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],25:[function(require,module,exports){
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
},{"lorem-ipsum":8}],26:[function(require,module,exports){

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
},{}],27:[function(require,module,exports){
let generateBrackets = require('./generateBrackets.js');
let brackets = require('./Brackets.js');

generateBrackets('body', brackets);



},{"./Brackets.js":25,"./generateBrackets.js":26}]},{},[27]);
