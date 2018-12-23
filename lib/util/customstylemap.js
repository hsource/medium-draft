'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _customStyleMap;

var _constants = require('./constants');

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Custom style map for custom entities like Hihglight.
*/
var customStyleMap = (_customStyleMap = {}, _defineProperty(_customStyleMap, _constants.Inline.HIGHLIGHT, {
  backgroundColor: 'yellow'
}), _defineProperty(_customStyleMap, _constants.Inline.CODE, {
  fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
  margin: '4px 0',
  fontSize: '0.9em',
  padding: '1px 3px',
  color: '#555',
  backgroundColor: '#fcfcfc',
  border: '1px solid #ccc',
  borderBottomColor: '#bbb',
  borderRadius: 3,
  boxShadow: 'inset 0 -1px 0 #bbb'
}), _customStyleMap);

var _default = customStyleMap;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(customStyleMap, 'customStyleMap', 'src/util/customstylemap.js');
  reactHotLoader.register(_default, 'default', 'src/util/customstylemap.js');
  leaveModule(module);
})();

;