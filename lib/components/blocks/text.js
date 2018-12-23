'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})(); // import './text.scss';

// export default class Paragraph extends Component {
//    render(){
//     return (
//       <EditorBlock {...this.props} />
//     );
//    }
// }

var _default = function _default(props) {
  return _react2.default.createElement(_draftJs.EditorBlock, props);
};

exports.default = _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'src/components/blocks/text.js');
  leaveModule(module);
})();

;