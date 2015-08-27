'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nets = require('nets');

var _nets2 = _interopRequireDefault(_nets);

var _MarkdownMenu = require('../MarkdownMenu');

var _MarkdownMenu2 = _interopRequireDefault(_MarkdownMenu);

var _MarkdownContent = require('../MarkdownContent');

var _MarkdownContent2 = _interopRequireDefault(_MarkdownContent);

var MarkdownSection = (function (_React$Component) {
  _inherits(MarkdownSection, _React$Component);

  function MarkdownSection() {
    _classCallCheck(this, MarkdownSection);

    _get(Object.getPrototypeOf(MarkdownSection.prototype), 'constructor', this).call(this);
    this.state = {
      markdown: ''
    };
  }

  _createClass(MarkdownSection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      if (this.props.content) {
        self.setState({ markdown: this.props.content });
      } else {
        (0, _nets2['default'])({
          url: this.props.fileName,
          encoding: undefined
        }, function (err, resp, body) {
          if (err) throw err;
          self.setState({ markdown: body });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'posr' },
        _react2['default'].createElement(
          'div',
          { className: 'w8 h100p posf t0 l0 mt2 bgcpri cwhite90 p1' },
          _react2['default'].createElement(_MarkdownMenu2['default'], { markdown: this.state.markdown })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'ml8 pl1/2' },
          _react2['default'].createElement(_MarkdownContent2['default'], { markdown: this.state.markdown })
        )
      );
    }
  }]);

  return MarkdownSection;
})(_react2['default'].Component);

MarkdownSection.propTypes = {
  fileName: _react2['default'].PropTypes.string,
  content: _react2['default'].PropTypes.string
};

exports['default'] = MarkdownSection;
module.exports = exports['default'];