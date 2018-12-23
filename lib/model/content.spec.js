'use strict';

var _draftJs = require('draft-js');

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _constants = require('../util/constants');

var _data = require('../../docs/data.json');

var _data2 = _interopRequireDefault(_data);

var _link = require('../components/entities/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createEditorState', function () {
  var es = (0, _content2.default)();

  it('creates empty editorState when no argument or null is passed', function () {
    var raw = (0, _draftJs.convertToRaw)(es.getCurrentContent());
    expect(raw.blocks).to.be.instanceof(Array);
    expect(raw.blocks[0].type).to.equal(_constants.Block.UNSTYLED);
    expect(raw.blocks[0].text).to.equal('');
    expect(raw.blocks[0]).to.include.keys('data', 'key');
  });

  it('adds link decorator by default in CompositeDecorator', function () {
    expect(es.getDecorator()).to.be.instanceof(_draftJs.CompositeDecorator);
    expect(es.getDecorator()._decorators.length).to.equal(1);
    expect(es.getDecorator()._decorators[0]).to.deep.equal({
      strategy: _link.findLinkEntities,
      component: _link2.default
    });
  });

  var esContent = (0, _content2.default)(_data2.default);

  it('fills data from provided json', function () {
    var blocks = esContent.getCurrentContent().getBlockMap();
    expect(blocks.size).to.be.above(1);

    expect(esContent.getDecorator()).to.be.instanceof(_draftJs.CompositeDecorator);
    expect(esContent.getDecorator()._decorators.length).to.equal(1);
    expect(esContent.getDecorator()._decorators[0]).to.deep.equal({
      strategy: _link.findLinkEntities,
      component: _link2.default
    });
  });
});