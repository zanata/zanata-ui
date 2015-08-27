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

var Input = (function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this.state = {
      focused: false,
      hover: false
    };
  }

  _createClass(Input, [{
    key: '_handleFocus',
    value: function _handleFocus(event) {
      this.setState({ focused: true });
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur(event) {
      this.setState({ focused: false });
    }
  }, {
    key: '_handleMouseOver',
    value: function _handleMouseOver(event) {
      if (event.type === 'mouseenter') {
        this.setState({ hover: true });
      } else {
        this.setState({ hover: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type || 'text';
      var classes = (0, _classnames2['default'])('h1&1/2', 'bdrs1/4', this.props.className, {
        'bd': this.props.outline,
        'bd2': this.props.outline,
        'ph1/4': this.props.outline,
        'bdcsec30': !this.state.hover && !this.state.focused,
        'bdcsec50': this.state.hover && !this.state.focused,
        'bdcpri': this.state.focused
      });
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'label',
          {
            htmlFor: this.props.name,
            className: 'fwsb csec dn' },
          this.props.label
        ),
        _react2['default'].createElement('input', _extends({}, this.props, {
          type: type,
          onMouseEnter: this._handleMouseOver,
          onMouseLeave: this._handleMouseOver,
          onFocus: this._handleFocus,
          onBlur: this._handleBlur,
          className: classes }))
      );
    }
  }]);

  return Input;
})(_react2['default'].Component);

Input.propTypes = {
  label: _react2['default'].PropTypes.string.isRequired,
  name: _react2['default'].PropTypes.string.isRequired,
  type: _react2['default'].PropTypes.string,
  outline: _react2['default'].PropTypes.boolean,
  className: _react2['default'].PropTypes.string
};

exports['default'] = Input;
module.exports = exports['default'];