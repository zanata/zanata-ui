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

var InputExample = (function (_React$Component) {
  _inherits(InputExample, _React$Component);

  function InputExample() {
    var _this = this;

    _classCallCheck(this, InputExample);

    _get(Object.getPrototypeOf(InputExample.prototype), 'constructor', this).apply(this, arguments);

    this._handleInputChange = function (event) {
      console.log(event.target.value);
    };

    this._handleInputFocus = function (customIndex) {
      return function (event) {
        console.info('focus', _this, customIndex, event);
      };
    };
  }

  _createClass(InputExample, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_2['default'], { label: 'Test input', placeholder: 'Test input no outline', margin: 'mb1', className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input outline', placeholder: 'Test input with outline', border: 'outline', margin: 'mb1&1/2', className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input hidden underline', placeholder: 'Test input with hidden label', border: 'underline', margin: 'mb1', hideLabel: true, className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input with description', placeholder: 'Test input with description', margin: 'mb1', description: 'This is a great input box that you should totally fill in', border: 'outline', className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input disabled', placeholder: 'Test input disabled', value: 'I\'m disabled', margin: 'mb1', disabled: true, border: 'outline', className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input error underlined', onChange: this._handleInputChange, placeholder: 'This can\'t be empty', status: 'danger', border: 'underline', margin: 'mb1', className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input success with description', onFocus: this._handleInputFocus(4), placeholder: 'Success', margin: 'mb1', defaultValue: 'Awwww yeeeah!', description: 'Great job you got it right', status: 'success', border: 'outline', className: 'w100p' }),
        _react2['default'].createElement(_2['default'], { label: 'Test input with reset', placeholder: 'You can reset this input', border: 'outline', reset: true, margin: 'mb1', className: 'w100p' })
      );
    }
  }]);

  return InputExample;
})(_react2['default'].Component);

exports['default'] = InputExample;
module.exports = exports['default'];