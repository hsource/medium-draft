'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

/*
Some of the constants which are used throughout this project instead of
directly using string.
*/

var Block = exports.Block = {
  UNSTYLED: 'unstyled',
  PARAGRAPH: 'unstyled',
  OL: 'ordered-list-item',
  UL: 'unordered-list-item',
  H1: 'header-one',
  H2: 'header-two',
  H3: 'header-three',
  H4: 'header-four',
  H5: 'header-five',
  H6: 'header-six',
  CODE: 'code-block',
  BLOCKQUOTE: 'blockquote',
  PULLQUOTE: 'pullquote',
  ATOMIC: 'atomic',
  BLOCKQUOTE_CAPTION: 'block-quote-caption',
  CAPTION: 'caption',
  TODO: 'todo',
  IMAGE: 'atomic:image',
  BREAK: 'atomic:break'
};

var Inline = exports.Inline = {
  BOLD: 'BOLD',
  CODE: 'CODE',
  ITALIC: 'ITALIC',
  STRIKETHROUGH: 'STRIKETHROUGH',
  UNDERLINE: 'UNDERLINE',
  HIGHLIGHT: 'HIGHLIGHT'
};

var Entity = exports.Entity = {
  LINK: 'LINK'
};

var HYPERLINK = exports.HYPERLINK = 'hyperlink';
var HANDLED = exports.HANDLED = 'handled';
var NOT_HANDLED = exports.NOT_HANDLED = 'not_handled';

var KEY_COMMANDS = exports.KEY_COMMANDS = {
  addNewBlock: function addNewBlock() {
    return 'add-new-block';
  },
  changeType: function changeType() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return 'changetype:' + type;
  },
  showLinkInput: function showLinkInput() {
    return 'showlinkinput';
  },
  unlink: function unlink() {
    return 'unlink';
  },
  toggleInline: function toggleInline() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return 'toggleinline:' + type;
  },
  deleteBlock: function deleteBlock() {
    return 'delete-block';
  }
};

var _default = {
  Block: Block,
  Inline: Inline,
  Entity: Entity
};
exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Block, 'Block', 'src/util/constants.js');
  reactHotLoader.register(Inline, 'Inline', 'src/util/constants.js');
  reactHotLoader.register(Entity, 'Entity', 'src/util/constants.js');
  reactHotLoader.register(HYPERLINK, 'HYPERLINK', 'src/util/constants.js');
  reactHotLoader.register(HANDLED, 'HANDLED', 'src/util/constants.js');
  reactHotLoader.register(NOT_HANDLED, 'NOT_HANDLED', 'src/util/constants.js');
  reactHotLoader.register(KEY_COMMANDS, 'KEY_COMMANDS', 'src/util/constants.js');
  reactHotLoader.register(_default, 'default', 'src/util/constants.js');
  leaveModule(module);
})();

;