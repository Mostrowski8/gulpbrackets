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
let drupal = "<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='70px' height='70px' x='0px' y='0px'  viewBox='-249 83.1 381 416' enable-background='new -249 83.1 381 416' xml:space='preserve'><g><g><path fill='#cccccc' d='M-69.7,312.5c-29.1,0-52.7,23.6-52.7,52.7c0,29.1,23.6,52.7,52.7,52.7c29.1,0,52.7-23.6,52.7-52.7 C-17,336.1-40.6,312.5-69.7,312.5z'/> </g> <g> <path fill='#cccccc' d='M-4.1,302.4c15.6,16.3,25.2,38.4,25.2,62.8c0,30.9-15.4,58.1-38.9,74.5c43.5-13.4,79.5-46.1,95.6-85.7 c22.3-54.8,1.5-96-33.3-133.4c1.1,4.8,1.7,9.9,1.7,15C46.1,267.4,24.9,294.1-4.1,302.4z'/> </g> <g> <path fill='#cccccc' d='M-63.7,235.7c0,22.3,18.1,40.3,40.3,40.3S17,257.9,17,235.7c0-22.3-18.1-40.3-40.3-40.3 S-63.7,213.4-63.7,235.7z'/> </g> <g> <path fill='#cccccc' d='M-139.2,423.7c-13.3-15.8-21.3-36.2-21.3-58.5c0-46.5,34.9-84.8,80-90.1c-7.7-11.2-12.3-24.8-12.3-39.4c0-38.4,31.1-69.4,69.5-69.4c3.2,0,6.3,0.2,9.3,0.6c-22.7-19.6-45.4-39.5-63.3-61.2c9.1,95.2-86.7,60.6-122.2,148.4C-223.2,312.9-201.8,385.6-139.2,423.7z'/></g></g></svg>";

module.exports = drupal;
},{}],26:[function(require,module,exports){
let wordpress = "<svg width='60' height='60' viewBox='0 0 256 255' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet'><path d='M18.124 127.5c0 43.296 25.16 80.711 61.646 98.442L27.594 82.986a108.965 108.965 0 0 0-9.47 44.514zm183.221-5.52c0-13.517-4.856-22.879-9.02-30.165-5.545-9.01-10.742-16.64-10.742-25.65 0-10.055 7.626-19.415 18.368-19.415.485 0 .944.06 1.417.088-19.46-17.829-45.387-28.714-73.863-28.714-38.213 0-71.832 19.606-91.39 49.302 2.566.077 4.984.13 7.039.13 11.44 0 29.15-1.387 29.15-1.387 5.897-.348 6.592 8.312.702 9.01 0 0-5.926.697-12.52 1.042L100.32 194.7l23.937-71.79-17.042-46.692c-5.89-.345-11.47-1.042-11.47-1.042-5.894-.346-5.203-9.358.691-9.01 0 0 18.064 1.388 28.811 1.388 11.44 0 29.151-1.388 29.151-1.388 5.9-.348 6.594 8.312.702 9.01 0 0-5.938.697-12.52 1.042l39.529 117.581 10.91-36.458c4.728-15.129 8.327-25.995 8.327-35.36zm-71.921 15.088l-32.818 95.363a109.376 109.376 0 0 0 30.899 4.456c12.737 0 24.952-2.202 36.323-6.2a9.605 9.605 0 0 1-.779-1.507l-33.625-92.112zm94.058-62.045c.47 3.484.737 7.224.737 11.247 0 11.1-2.073 23.577-8.317 39.178l-33.411 96.6c32.518-18.963 54.39-54.193 54.39-94.545.002-19.017-4.856-36.9-13.4-52.48zM127.505 0C57.2 0 0 57.196 0 127.5c0 70.313 57.2 127.507 127.505 127.507 70.302 0 127.51-57.194 127.51-127.507C255.014 57.196 197.808 0 127.506 0zm0 249.163c-67.08 0-121.659-54.578-121.659-121.663 0-67.08 54.576-121.654 121.659-121.654 67.078 0 121.652 54.574 121.652 121.654 0 67.085-54.574 121.663-121.652 121.663z' fill='#cccccc'/></svg>";

module.exports = wordpress;
},{}],27:[function(require,module,exports){
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
},{"./../img/drupal":25,"./../img/wordpress-icon":26,"lorem-ipsum":8}],28:[function(require,module,exports){

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
},{}],29:[function(require,module,exports){
let generateBrackets = require('./generateBrackets.js');
let brackets = require('./Brackets.js');

generateBrackets('body', brackets[0]);
generateBrackets('body', brackets[1], "greyvariant");


},{"./Brackets.js":27,"./generateBrackets.js":28}]},{},[29]);
