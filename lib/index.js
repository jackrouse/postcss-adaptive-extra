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
  function processData(item,css){
    if(item && item.path  && css.source.input.file.match(item.path) !== null){
      if(item.remUnit!==undefined){
        options.remUnit =item.remUnit
      }
      if(item.autoRem!==undefined){
        options.autoRem = item.autoRem
      }
      if(item.baseDpr!==undefined){
        options.baseDpr =item.baseDpr
      }
      if(item.remPrecision!==undefined){
        options.remPrecision = item.remPrecision
      }
      if(item.hairlineClass!==undefined){
        options.hairlineClass = item.hairlineClass
      }
    }
  }
  return function (css, result) {
    if(options.extra){
      if(options.extra instanceof Array){
        options.extra.forEach(function (item) {
          processData(item,css)
        })
      }else{
        processData(options.extra,css)
      }
    }


    var adaptiveIns = new _adaptive2.default(options);
    var output = adaptiveIns.parse(css.toString());
    result.root = _postcss2.default.parse(output);
  };
});
