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

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h1',
          { className: 'fz5 csec mb1' },
          'Patterns'
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'fz4 fwl mb1 csec' },
          'Forms'
        ),
        _react2['default'].createElement(
          'h3',
          { className: 'fz3 fwsb mb1/2 csec' },
          'Inputs'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'w16' },
          _react2['default'].createElement(_Input2['default'], { label: 'Test input', placeholder: 'Test input no outline', className: 'w100p mb1' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input outline', placeholder: 'Test input with outline', outline: true, className: 'w100p mb1&1/2' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input hidden', placeholder: 'Test input with hidden label', outline: true, hideLabel: true, className: 'w100p mb1' }),
          _react2['default'].createElement(
            'div',
            { className: 'mb1' },
            _react2['default'].createElement(_Input2['default'], { label: 'Test input with description', placeholder: 'Test input with description', description: 'This is a great input box that you should totally fill in', outline: true, className: 'w100p' })
          ),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input disabled', placeholder: 'Test input disabled', value: 'I\'m disabled', disabled: true, outline: true, className: 'w100p mb1' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input error', placeholder: 'This can\'t be empty', status: 'danger', outline: true, className: 'w100p mb1' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input success with description', placeholder: 'Success', value: 'Awwww yeeeah!', description: 'Great job you got it right', status: 'success', outline: true, className: 'w100p' })
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];