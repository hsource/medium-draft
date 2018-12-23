'use strict';

var _rendermap = require('./rendermap');

var _rendermap2 = _interopRequireDefault(_rendermap);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('rendermap', function () {
  it('returns cite for CAPTION', function () {
    expect(_rendermap2.default.get(_constants.Block.CAPTION)).to.deep.equal({
      element: 'cite'
    });
  });

  it('returns blockquote for BLOCKQUOTE_CAPTION', function () {
    expect(_rendermap2.default.get(_constants.Block.BLOCKQUOTE_CAPTION)).to.deep.equal({
      element: 'blockquote'
    });
  });

  it('returns div for TODO', function () {
    expect(_rendermap2.default.get(_constants.Block.TODO)).to.deep.equal({
      element: 'div'
    });
  });

  it('returns figure for IMAGE', function () {
    expect(_rendermap2.default.get(_constants.Block.IMAGE)).to.deep.equal({
      element: 'figure'
    });
  });
});