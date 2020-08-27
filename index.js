'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _adaptive = require('postcss-adaptive/lib/adaptive');

var _adaptive2 = _interopRequireDefault(_adaptive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _postcss2.default.plugin(_package2.default.name, function (options) {
  return function (css, result) {
    if (options.extra && options.extra.path && options.extra.remUnit && css.source.input.file.match(options.extra.path) !== null) {
      options.remUnit = options.extra.remUnit
    }
    var adaptiveIns = new _adaptive2.default(options);
    var output = adaptiveIns.parse(css.toString());
    result.root = _postcss2.default.parse(output);
  };
});