'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

require('draft-js/dist/Draft.css');

require('hint.css/hint.min.css');

require('./index.scss');

require('./components/addbutton.scss');

require('./components/toolbar.scss');

require('./components/blocks/text.scss');

require('./components/blocks/atomic.scss');

require('./components/blocks/blockquotecaption.scss');

require('./components/blocks/caption.scss');

require('./components/blocks/todo.scss');

require('./components/blocks/image.scss');

var _index = require('./index');

var _exporter = require('./exporter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint-disable */

var newTypeMap = _index.StringToTypeMap;
newTypeMap['2.'] = _index.Block.OL;

var hasCommandModifier = _draftJs.KeyBindingUtil.hasCommandModifier;

/*
A demo for example editor. (Feature not built into medium-draft as too specific.)
Convert quotes to curly quotes.
*/

var DQUOTE_START = '“';
var DQUOTE_END = '”';
var SQUOTE_START = '‘';
var SQUOTE_END = '’';

var newBlockToHTML = function newBlockToHTML(block) {
  var blockType = block.type;
  if (block.type === _index.Block.ATOMIC) {
    if (block.text === 'E') {
      return {
        start: '<figure class="md-block-atomic md-block-atomic-embed">',
        end: '</figure>'
      };
    } else if (block.text === '-') {
      return _react2.default.createElement(
        'div',
        { className: 'md-block-atomic md-block-atomic-break' },
        _react2.default.createElement('hr', null)
      );
    }
  }
  return (0, _exporter.blockToHTML)(block);
};

var newEntityToHTML = function newEntityToHTML(entity, originalText) {
  if (entity.type === 'embed') {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'a',
        {
          className: 'embedly-card',
          href: entity.data.url,
          'data-card-controls': '0',
          'data-card-theme': 'dark'
        },
        'Embedded \u2015 ',
        entity.data.url
      )
    );
  }
  return (0, _exporter.entityToHTML)(entity, originalText);
};

var handleBeforeInput = function handleBeforeInput(editorState, str, onChange) {
  if (str === '"' || str === '\'') {
    var currentBlock = (0, _index.getCurrentBlock)(editorState);
    var selectionState = editorState.getSelection();
    var contentState = editorState.getCurrentContent();
    var text = currentBlock.getText();
    var len = text.length;
    if (selectionState.getAnchorOffset() === 0) {
      onChange(_draftJs.EditorState.push(editorState, _draftJs.Modifier.insertText(contentState, selectionState, str === '"' ? DQUOTE_START : SQUOTE_START), 'transpose-characters'));
      return _index.HANDLED;
    } else if (len > 0) {
      var lastChar = text[len - 1];
      if (lastChar !== ' ') {
        onChange(_draftJs.EditorState.push(editorState, _draftJs.Modifier.insertText(contentState, selectionState, str === '"' ? DQUOTE_END : SQUOTE_END), 'transpose-characters'));
      } else {
        onChange(_draftJs.EditorState.push(editorState, _draftJs.Modifier.insertText(contentState, selectionState, str === '"' ? DQUOTE_START : SQUOTE_START), 'transpose-characters'));
      }
      return _index.HANDLED;
    }
  }
  return (0, _index.beforeInput)(editorState, str, onChange, newTypeMap);
};

var SeparatorSideButton = function (_React$Component) {
  _inherits(SeparatorSideButton, _React$Component);

  function SeparatorSideButton(props) {
    _classCallCheck(this, SeparatorSideButton);

    var _this = _possibleConstructorReturn(this, (SeparatorSideButton.__proto__ || Object.getPrototypeOf(SeparatorSideButton)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(SeparatorSideButton, [{
    key: 'onClick',
    value: function onClick() {
      var editorState = this.props.getEditorState();
      var content = editorState.getCurrentContent();
      var contentWithEntity = content.createEntity('separator', 'IMMUTABLE', {});
      var entityKey = contentWithEntity.getLastCreatedEntityKey();
      editorState = _draftJs.EditorState.push(editorState, contentWithEntity, 'create-entity');
      this.props.setEditorState(_draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, '-'));
      this.props.close();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: 'md-sb-button md-sb-img-button',
          type: 'button',
          title: 'Add a separator',
          onClick: this.onClick
        },
        _react2.default.createElement('i', { className: 'fa fa-minus' })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SeparatorSideButton;
}(_react2.default.Component);

var EmbedSideButton = function (_React$Component2) {
  _inherits(EmbedSideButton, _React$Component2);

  function EmbedSideButton(props) {
    _classCallCheck(this, EmbedSideButton);

    var _this2 = _possibleConstructorReturn(this, (EmbedSideButton.__proto__ || Object.getPrototypeOf(EmbedSideButton)).call(this, props));

    _this2.onClick = _this2.onClick.bind(_this2);
    _this2.addEmbedURL = _this2.addEmbedURL.bind(_this2);
    return _this2;
  }

  _createClass(EmbedSideButton, [{
    key: 'onClick',
    value: function onClick() {
      var url = window.prompt('Enter a URL', 'https://www.youtube.com/watch?v=PMNFaAUs2mo');
      this.props.close();
      if (!url) {
        return;
      }
      this.addEmbedURL(url);
    }
  }, {
    key: 'addEmbedURL',
    value: function addEmbedURL(url) {
      var editorState = this.props.getEditorState();
      var content = editorState.getCurrentContent();
      var contentWithEntity = content.createEntity('embed', 'IMMUTABLE', { url: url });
      var entityKey = contentWithEntity.getLastCreatedEntityKey();
      editorState = _draftJs.EditorState.push(editorState, contentWithEntity, 'create-entity');
      this.props.setEditorState(_draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, 'E'));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: 'md-sb-button md-sb-img-button',
          type: 'button',
          title: 'Add an Embed',
          onClick: this.onClick
        },
        _react2.default.createElement('i', { className: 'fa fa-code' })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return EmbedSideButton;
}(_react2.default.Component);

EmbedSideButton.propTypes = {
  setEditorState: _propTypes2.default.func,
  getEditorState: _propTypes2.default.func,
  close: _propTypes2.default.func
};

var AtomicEmbedComponent = function (_React$Component3) {
  _inherits(AtomicEmbedComponent, _React$Component3);

  function AtomicEmbedComponent(props) {
    _classCallCheck(this, AtomicEmbedComponent);

    var _this3 = _possibleConstructorReturn(this, (AtomicEmbedComponent.__proto__ || Object.getPrototypeOf(AtomicEmbedComponent)).call(this, props));

    _this3.state = {
      showIframe: false
    };

    _this3.enablePreview = _this3.enablePreview.bind(_this3);
    return _this3;
  }

  _createClass(AtomicEmbedComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderEmbedly();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.showIframe !== this.state.showIframe && this.state.showIframe === true) {
        this.renderEmbedly();
      }
    }
  }, {
    key: 'getScript',
    value: function getScript() {
      var script = document.createElement('script');
      script.async = 1;
      script.src = '//cdn.embedly.com/widgets/platform.js';
      script.onload = function () {
        window.embedly();
      };
      document.body.appendChild(script);
    }
  }, {
    key: 'renderEmbedly',
    value: function renderEmbedly() {
      if (window.embedly) {
        window.embedly();
      } else {
        this.getScript();
      }
    }
  }, {
    key: 'enablePreview',
    value: function enablePreview() {
      this.setState({
        showIframe: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var url = this.props.data.url;

      var innerHTML = '<div><a class="embedly-card" href="' + url + '" data-card-controls="0" data-card-theme="dark">Embedded \u2015 ' + url + '</a></div>';
      return _react2.default.createElement(
        'div',
        { className: 'md-block-atomic-embed' },
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: innerHTML } })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return AtomicEmbedComponent;
}(_react2.default.Component);

AtomicEmbedComponent.propTypes = {
  data: _propTypes2.default.object.isRequired
};


var AtomicSeparatorComponent = function AtomicSeparatorComponent(props) {
  return _react2.default.createElement('hr', null);
};

var AtomicBlock = function AtomicBlock(props) {
  var blockProps = props.blockProps,
      block = props.block;

  var content = blockProps.getEditorState().getCurrentContent();
  var entity = content.getEntity(block.getEntityAt(0));
  var data = entity.getData();
  var type = entity.getType();
  if (blockProps.components[type]) {
    var AtComponent = blockProps.components[type];
    return _react2.default.createElement(
      'div',
      { className: 'md-block-atomic-wrapper md-block-atomic-wrapper-' + type },
      _react2.default.createElement(AtComponent, { data: data })
    );
  }
  return _react2.default.createElement(
    'p',
    null,
    'Block of type ',
    _react2.default.createElement(
      'b',
      null,
      type
    ),
    ' is not supported.'
  );
};

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App(props) {
    _classCallCheck(this, App);

    var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this4.state = {
      editorState: (0, _index.createEditorState)(),
      editorEnabled: true,
      placeholder: 'Write here...'
    };

    _this4.onChange = function (editorState) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (_this4.state.editorEnabled) {
        _this4.setState({ editorState: editorState }, function () {
          if (callback) {
            callback();
          }
        });
      }
    };

    _this4.sideButtons = [{
      title: 'Image',
      component: _index.ImageSideButton
    }, {
      title: 'Embed',
      component: EmbedSideButton
    }, {
      title: 'Separator',
      component: SeparatorSideButton
    }];

    _this4.exporter = (0, _exporter.setRenderOptions)({
      styleToHTML: _exporter.styleToHTML,
      blockToHTML: newBlockToHTML,
      entityToHTML: newEntityToHTML
    });

    _this4.getEditorState = function () {
      return _this4.state.editorState;
    };

    _this4.logData = _this4.logData.bind(_this4);
    _this4.renderHTML = _this4.renderHTML.bind(_this4);
    _this4.toggleEdit = _this4.toggleEdit.bind(_this4);
    _this4.fetchData = _this4.fetchData.bind(_this4);
    _this4.loadSavedData = _this4.loadSavedData.bind(_this4);
    _this4.keyBinding = _this4.keyBinding.bind(_this4);
    _this4.handleKeyCommand = _this4.handleKeyCommand.bind(_this4);
    _this4.handleDroppedFiles = _this4.handleDroppedFiles.bind(_this4);
    _this4.handleReturn = _this4.handleReturn.bind(_this4);
    return _this4;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      setTimeout(this.fetchData, 1000);
    }
  }, {
    key: 'rendererFn',
    value: function rendererFn(setEditorState, getEditorState) {
      var atomicRenderers = {
        embed: AtomicEmbedComponent,
        separator: AtomicSeparatorComponent
      };
      var rFnOld = (0, _index.rendererFn)(setEditorState, getEditorState);
      var rFnNew = function rFnNew(contentBlock) {
        var type = contentBlock.getType();
        switch (type) {
          case _index.Block.ATOMIC:
            return {
              component: AtomicBlock,
              editable: false,
              props: {
                components: atomicRenderers,
                getEditorState: getEditorState
              }
            };
          default:
            return rFnOld(contentBlock);
        }
      };
      return rFnNew;
    }
  }, {
    key: 'keyBinding',
    value: function keyBinding(e) {
      if (hasCommandModifier(e)) {
        if (e.which === 83) {
          /* Key S */
          return 'editor-save';
        }
        // else if (e.which === 74 /* Key J */) {
        //  return 'do-nothing';
        //}
      }
      if (e.altKey === true) {
        if (e.shiftKey === true) {
          switch (e.which) {
            /* Alt + Shift + L */
            case 76:
              return 'load-saved-data';
            /* Key E */
            // case 69: return 'toggle-edit-mode';
          }
        }
        if (e.which === 72 /* Key H */) {
            return 'toggleinline:HIGHLIGHT';
          }
      }
      return (0, _index.keyBindingFn)(e);
    }
  }, {
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      if (command === 'editor-save') {
        window.localStorage['editor'] = JSON.stringify((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        window.ga('send', 'event', 'draftjs', command);
        return true;
      } else if (command === 'load-saved-data') {
        this.loadSavedData();
        return true;
      } else if (command === 'toggle-edit-mode') {
        this.toggleEdit();
      }
      return false;
    }
  }, {
    key: 'fetchData',
    value: function fetchData() {
      var _this5 = this;

      window.ga('send', 'event', 'draftjs', 'load-data', 'ajax');
      this.setState({
        placeholder: 'Loading...'
      });
      var req = new XMLHttpRequest();
      req.open('GET', 'data.json', true);
      req.onreadystatechange = function () {
        if (req.readyState === 4) {
          var data = JSON.parse(req.responseText);
          _this5.setState({
            editorState: (0, _index.createEditorState)(data),
            placeholder: 'Write here...'
          }, function () {
            _this5._editor.focus();
          });
          window.ga('send', 'event', 'draftjs', 'data-success');
        }
      };
      req.send();
    }
  }, {
    key: 'logData',
    value: function logData(e) {
      var currentContent = this.state.editorState.getCurrentContent();
      var es = (0, _draftJs.convertToRaw)(currentContent);
      console.log(es);
      console.log(this.state.editorState.getSelection().toJS());
      window.ga('send', 'event', 'draftjs', 'log-data');
    }
  }, {
    key: 'renderHTML',
    value: function renderHTML(e) {
      var currentContent = this.state.editorState.getCurrentContent();
      var eHTML = this.exporter(currentContent);
      var newWin = window.open(window.location.pathname + 'rendered.html', 'windowName', 'height=' + window.screen.height + ',width=' + window.screen.wdith);
      newWin.onload = function () {
        return newWin.postMessage(eHTML, window.location.origin);
      };
    }
  }, {
    key: 'loadSavedData',
    value: function loadSavedData() {
      var data = window.localStorage.getItem('editor');
      if (data === null) {
        return;
      }
      try {
        var blockData = JSON.parse(data);
        console.log(blockData);
        this.onChange(_draftJs.EditorState.push(this.state.editorState, (0, _draftJs.convertFromRaw)(blockData)), this._editor.focus);
      } catch (e) {
        console.log(e);
      }
      window.ga('send', 'event', 'draftjs', 'load-data', 'localstorage');
    }
  }, {
    key: 'toggleEdit',
    value: function toggleEdit(e) {
      var _this6 = this;

      this.setState({
        editorEnabled: !this.state.editorEnabled
      }, function () {
        window.ga('send', 'event', 'draftjs', 'toggle-edit', _this6.state.editorEnabled + '');
      });
    }
  }, {
    key: 'handleDroppedFiles',
    value: function handleDroppedFiles(selection, files) {
      window.ga('send', 'event', 'draftjs', 'filesdropped', files.length + ' files');
      var file = files[0];
      if (file.type.indexOf('image/') === 0) {
        // eslint-disable-next-line no-undef
        var src = URL.createObjectURL(file);
        this.onChange((0, _index.addNewBlockAt)(this.state.editorState, selection.getAnchorKey(), _index.Block.IMAGE, {
          src: src
        }));
        return _index.HANDLED;
      }
      return _index.NOT_HANDLED;
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(e) {
      // const currentBlock = getCurrentBlock(this.state.editorState);
      // var text = currentBlock.getText();
      return _index.NOT_HANDLED;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var _state = this.state,
          editorState = _state.editorState,
          editorEnabled = _state.editorEnabled;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'editor-action' },
          _react2.default.createElement(
            'button',
            { onClick: this.logData },
            'Log State'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.renderHTML },
            'Render HTML'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.toggleEdit },
            'Toggle Edit'
          )
        ),
        _react2.default.createElement(_index.Editor, {
          ref: function ref(e) {
            _this7._editor = e;
          },
          editorState: editorState,
          onChange: this.onChange,
          editorEnabled: editorEnabled,
          handleDroppedFiles: this.handleDroppedFiles,
          handleKeyCommand: this.handleKeyCommand,
          placeholder: this.state.placeholder,
          keyBindingFn: this.keyBinding,
          beforeInput: handleBeforeInput,
          handleReturn: this.handleReturn,
          sideButtons: this.sideButtons,
          rendererFn: this.rendererFn
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(_react2.default.Component);

if (!__PROD__) {
  window.ga = function () {
    console.log(arguments);
  };
}
_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(newTypeMap, 'newTypeMap', 'src/example.js');
  reactHotLoader.register(hasCommandModifier, 'hasCommandModifier', 'src/example.js');
  reactHotLoader.register(DQUOTE_START, 'DQUOTE_START', 'src/example.js');
  reactHotLoader.register(DQUOTE_END, 'DQUOTE_END', 'src/example.js');
  reactHotLoader.register(SQUOTE_START, 'SQUOTE_START', 'src/example.js');
  reactHotLoader.register(SQUOTE_END, 'SQUOTE_END', 'src/example.js');
  reactHotLoader.register(newBlockToHTML, 'newBlockToHTML', 'src/example.js');
  reactHotLoader.register(newEntityToHTML, 'newEntityToHTML', 'src/example.js');
  reactHotLoader.register(handleBeforeInput, 'handleBeforeInput', 'src/example.js');
  reactHotLoader.register(SeparatorSideButton, 'SeparatorSideButton', 'src/example.js');
  reactHotLoader.register(EmbedSideButton, 'EmbedSideButton', 'src/example.js');
  reactHotLoader.register(AtomicEmbedComponent, 'AtomicEmbedComponent', 'src/example.js');
  reactHotLoader.register(AtomicSeparatorComponent, 'AtomicSeparatorComponent', 'src/example.js');
  reactHotLoader.register(AtomicBlock, 'AtomicBlock', 'src/example.js');
  reactHotLoader.register(App, 'App', 'src/example.js');
  leaveModule(module);
})();

;