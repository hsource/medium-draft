'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var _link = require('../components/entities/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var defaultDecorators = new _draftJs.CompositeDecorator([{
  strategy: _link.findLinkEntities,
  component: _link2.default
}]);

var createEditorState = function createEditorState() {
  var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var decorators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDecorators;

  if (content === null) {
    return _draftJs.EditorState.createEmpty(decorators);
  }
  var contentState = null;
  if (typeof content === 'string') {
    contentState = _draftJs.ContentState.createFromText(content);
  } else {
    contentState = (0, _draftJs.convertFromRaw)(content);
  }
  return _draftJs.EditorState.createWithContent(contentState, decorators);
};

var _default = createEditorState;
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultDecorators, 'defaultDecorators', 'src/model/content.js');
  reactHotLoader.register(createEditorState, 'createEditorState', 'src/model/content.js');
  reactHotLoader.register(_default, 'default', 'src/model/content.js');
  leaveModule(module);
})();

;