'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Map;

var _immutable = require('immutable');

var _draftJs = require('draft-js');

var _constants = require('./constants');

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Mapping that returns containers for the various block types.
*/
var RenderMap = (0, _immutable.Map)((_Map = {}, _defineProperty(_Map, _constants.Block.CAPTION, {
  element: 'cite'
}), _defineProperty(_Map, _constants.Block.BLOCKQUOTE_CAPTION, {
  element: 'blockquote'
}), _defineProperty(_Map, _constants.Block.TODO, {
  element: 'div'
}), _defineProperty(_Map, _constants.Block.IMAGE, {
  element: 'figure'
}), _defineProperty(_Map, _constants.Block.BREAK, {
  element: 'div'
}), _Map)).merge(_draftJs.DefaultDraftBlockRenderMap);

var _default = RenderMap;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RenderMap, 'RenderMap', 'src/util/rendermap.js');
  reactHotLoader.register(_default, 'default', 'src/util/rendermap.js');
  leaveModule(module);
})();

;