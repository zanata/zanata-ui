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

var Icon = (function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Icon, [{
    key: '_sizeClasses',
    value: function _sizeClasses(size) {
      switch (size) {
        case 'sn1':
          return 'wsn1 hsn1';
        case 's1':
          return 'ws1 hs1';
        case 's2':
          return 'ws2 hs2';
        default:
          return 'ws0 hs0';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var svgIcon = '<use xlink:href="#Icon-' + this.props.name + '" />';
      var classes = (0, _classnames2['default'])('dib posr', this.props.className, this._sizeClasses(this.props.size));
      return _react2['default'].createElement(
        'span',
        _extends({}, this.props, { className: classes }),
        _react2['default'].createElement('svg', { dangerouslySetInnerHTML: { __html: svgIcon }, className: 'posa a0', style: { maxWidth: '100%', fill: 'currentColor' } })
      );
    }
  }]);

  return Icon;
})(_react2['default'].Component);

Icon.propTypes = {
  name: _react2['default'].PropTypes.string.isRequired,
  size: _react2['default'].PropTypes.string,
  className: _react2['default'].PropTypes.string
};

exports['default'] = Icon;
module.exports = exports['default'];