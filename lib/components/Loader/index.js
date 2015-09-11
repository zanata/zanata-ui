'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var Loader = (function (_React$Component) {
  _inherits(Loader, _React$Component);

  function Loader() {
    _classCallCheck(this, Loader);

    _get(Object.getPrototypeOf(Loader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Loader, [{
    key: '_sizeClasses',
    value: function _sizeClasses(size) {
      switch (size) {
        case 'n1':
          return 'wsn1 hsn1';
        case '1':
          return 'ws1 hs1';
        case '2':
          return 'ws2 hs2';
        case '3':
          return 'ws3 hs3';
        case '4':
          return 'ws4 hs4';
        case '5':
          return 'ws5 hs5';
        case '6':
          return 'ws6 hs6';
        case '7':
          return 'ws7 hs7';
        case '8':
          return 'ws8 hs8';
        case '9':
          return 'ws9 hs9';
        case '10':
          return 'ws10 hs10';
        default:
          return 'ws0 hs0';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2['default'])('difx jcsb aic', this.props.className, this._sizeClasses(this.props.size));
      var loaderStyle = {
        width: '27.8%',
        height: '27.8%'
      };
      return _react2['default'].createElement(
        'span',
        _extends({}, this.props, { className: classes }),
        _react2['default'].createElement(_Icon2['default'], { name: 'dot', className: 'animdur900ms animici animtfeob animnbd', style: loaderStyle }),
        _react2['default'].createElement(_Icon2['default'], { name: 'dot', className: 'animdur900ms animici animtfeob animnbd animdel150ms', style: loaderStyle }),
        _react2['default'].createElement(_Icon2['default'], { name: 'dot', className: 'animdur900ms animici animtfeob animnbd animdel300ms', style: loaderStyle })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      size: _react2['default'].PropTypes.string,
      className: _react2['default'].PropTypes.string
    },
    enumerable: true
  }]);

  return Loader;
})(_react2['default'].Component);

exports['default'] = Loader;
module.exports = exports['default'];