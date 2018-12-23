'use strict';

var _immutable = require('immutable');

var _draftJs = require('draft-js');

var _blockStyleFn = require('./blockStyleFn');

var _blockStyleFn2 = _interopRequireDefault(_blockStyleFn);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var BASE_BLOCK_CLASS = 'md-block';

describe('blockStyleFn()', function () {
  it('should return block class for UNKNOWN', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: 'some-unknown-type'
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS);
  });

  it('should return block class for UNSTYLED', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.UNSTYLED
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-paragraph');
  });

  it('should return block class for CAPTION', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.CAPTION
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-caption');
  });

  it('should return block class for BLOCKQUOTE_CAPTION', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.BLOCKQUOTE_CAPTION
    });
    var cls = BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-quote';
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(cls + ' md-RichEditor-blockquote ' + BASE_BLOCK_CLASS + '-quote-caption');
  });

  it('should return block class for BLOCKQUOTE', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.BLOCKQUOTE
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-quote md-RichEditor-blockquote');
  });

  it('should return block class for ATOMIC', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.ATOMIC
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-atomic');
  });

  it('should return block class for IMAGE', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.IMAGE
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-image');
  });

  it('should return block class for TODO', function () {
    var todoBlock = new _draftJs.ContentBlock({
      type: _constants.Block.TODO
    });
    var todoBlockChecked = new _draftJs.ContentBlock({
      type: _constants.Block.TODO,
      data: (0, _immutable.Map)({
        checked: true
      })
    });

    var baseTodoClass = BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-paragraph';

    expect((0, _blockStyleFn2.default)(todoBlock)).to.equal(baseTodoClass + ' ' + BASE_BLOCK_CLASS + '-todo ' + BASE_BLOCK_CLASS + '-todo-unchecked');
    expect((0, _blockStyleFn2.default)(todoBlockChecked)).to.equal(baseTodoClass + ' ' + BASE_BLOCK_CLASS + '-todo ' + BASE_BLOCK_CLASS + '-todo-checked');
  });

  it('should return block class for CODE', function () {
    var normalBlock = new _draftJs.ContentBlock({
      type: _constants.Block.CODE
    });
    expect((0, _blockStyleFn2.default)(normalBlock)).to.equal(BASE_BLOCK_CLASS + ' ' + BASE_BLOCK_CLASS + '-code-block');
  });
});
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BASE_BLOCK_CLASS, 'BASE_BLOCK_CLASS', 'src/util/blockStyleFn.spec.js');
  leaveModule(module);
})();

;