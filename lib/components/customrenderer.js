'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blockquotecaption = require('./blocks/blockquotecaption');

var _blockquotecaption2 = _interopRequireDefault(_blockquotecaption);

var _caption = require('./blocks/caption');

var _caption2 = _interopRequireDefault(_caption);

var _atomic = require('./blocks/atomic');

var _atomic2 = _interopRequireDefault(_atomic);

var _todo = require('./blocks/todo');

var _todo2 = _interopRequireDefault(_todo);

var _image = require('./blocks/image');

var _image2 = _interopRequireDefault(_image);

var _break = require('./blocks/break');

var _break2 = _interopRequireDefault(_break);

var _constants = require('../util/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default(setEditorState, getEditorState) {
  return function (contentBlock) {
    // console.log(editorState, onChange);
    var type = contentBlock.getType();
    switch (type) {
      case _constants.Block.BLOCKQUOTE_CAPTION:
        return {
          component: _blockquotecaption2.default
        };
      case _constants.Block.CAPTION:
        return {
          component: _caption2.default
        };
      case _constants.Block.ATOMIC:
        return {
          component: _atomic2.default,
          editable: false,
          props: {
            getEditorState: getEditorState
          }
        };
      case _constants.Block.TODO:
        return {
          component: _todo2.default,
          props: {
            setEditorState: setEditorState,
            getEditorState: getEditorState
          }
        };
      case _constants.Block.IMAGE:
        return {
          component: _image2.default,
          props: {
            setEditorState: setEditorState,
            getEditorState: getEditorState
          }
        };
      case _constants.Block.BREAK:
        return {
          component: _break2.default,
          editable: false
        };
      default:
        return null;
    }
  };
};

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'src/components/customrenderer.js');
  leaveModule(module);
})();

;