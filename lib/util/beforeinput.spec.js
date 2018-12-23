'use strict';

var _content = require('../model/content');

var _content2 = _interopRequireDefault(_content);

var _constants = require('./constants');

var _beforeinput = require('./beforeinput');

var _beforeinput2 = _interopRequireDefault(_beforeinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('beforeInput()', function () {
  it('returns NOT_HANDLED for atomic like blocks', function () {
    var dummyData = {
      entityMap: {},
      blocks: [{
        key: 'etee',
        text: 'E',
        type: 'atomic',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [{
          offset: 0,
          length: 1,
          key: 3
        }],
        data: {}
      }]
    };
    var es = (0, _content2.default)(dummyData);
    expect((0, _beforeinput2.default)(es)).to.equal(_constants.NOT_HANDLED);
    dummyData.blocks[0].type = _constants.Block.IMAGE;
    es = (0, _content2.default)(dummyData);
    expect((0, _beforeinput2.default)(es)).to.equal(_constants.NOT_HANDLED);
  });
});