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

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

// const Button = ButtonFactory(React)

var ModalBasicExample = (function (_React$Component) {
  _inherits(ModalBasicExample, _React$Component);

  function ModalBasicExample() {
    var _this = this;

    _classCallCheck(this, ModalBasicExample);

    _get(Object.getPrototypeOf(ModalBasicExample.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      showModal: false
    };

    this.close = function () {
      _this.setState({ showModal: false });
    };

    this.open = function () {
      _this.setState({ showModal: true });
    };
  }

  _createClass(ModalBasicExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'modal-example' },
        _react2['default'].createElement(
          _Button2['default'],
          { onClick: this.open, kind: 'primary' },
          'Open Modal'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Click to get the full Modal experience!'
        ),
        _react2['default'].createElement(
          _2['default'],
          { show: this.state.showModal, onHide: this.close },
          _react2['default'].createElement(
            _2['default'].Header,
            null,
            _react2['default'].createElement(
              _2['default'].Title,
              null,
              'My Modal'
            )
          ),
          _react2['default'].createElement(
            _2['default'].Body,
            { scrollable: false },
            _react2['default'].createElement(
              'p',
              null,
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.'
            )
          ),
          _react2['default'].createElement(
            _2['default'].Footer,
            null,
            _react2['default'].createElement(
              'button',
              { className: 'mr1 cpri', onClick: this.close },
              'Cancel'
            ),
            _react2['default'].createElement(
              _Button2['default'],
              { kind: 'default' },
              'Submit'
            )
          )
        )
      );
    }
  }]);

  return ModalBasicExample;
})(_react2['default'].Component);

exports['default'] = ModalBasicExample;
module.exports = exports['default'];