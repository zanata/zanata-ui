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

var _lodash = require('lodash');

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var Input = (function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this);
    this._handleFocus = this._handleFocus.bind(this);
    this._handleBlur = this._handleBlur.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this.state = {
      focused: false,
      hover: false
    };
  }

  _createClass(Input, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2['default'])(nextProps, this.props) || !(0, _shallowequal2['default'])(nextState, this.state);
    }
  }, {
    key: '_handleFocus',
    value: function _handleFocus(event, cb) {
      if (!this.props.disabled) this.setState({ focused: true });
      if (typeof this.props.onFocus === 'function') this.props.onFocus();
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur(event) {
      this.setState({ focused: false });
      if (typeof this.props.onBlur === 'function') this.props.onBlur();
    }
  }, {
    key: '_handleMouseEnter',
    value: function _handleMouseEnter(event) {
      if (!this.props.disabled) this.setState({ hover: true });
      if (typeof this.props.onMouseEnter === 'function') this.props.onMouseEnter();
    }
  }, {
    key: '_handleMouseLeave',
    value: function _handleMouseLeave(event) {
      this.setState({ hover: false });
      if (typeof this.props.onMouseEnter === 'function') this.props.onMouseLeave();
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type || 'text';
      var inputId = (0, _lodash.uniqueId)((0, _lodash.camelCase)(this.props.label) + '_');
      var describeId = this.props.description ? (0, _lodash.uniqueId)((0, _lodash.camelCase)(this.props.label) + '_d_') : undefined;
      var inputStatusClass = this.props.status ? 'bdc' + this.props.status : undefined;
      var textStatusClass = this.props.status ? 'c' + this.props.status : undefined;
      var labelClasses = (0, _classnames2['default'])('db fwsb csec pv1/4', textStatusClass, {
        'sronly': this.props.hideLabel
      });
      var inputClasses = (0, _classnames2['default'])('db bdrs1/4', this.props.className, inputStatusClass, {
        'bd bd2 h1&1/2 ph1/4': this.props.outline,
        'bdcsec30': !this.state.hover && !this.state.focused && this.props.outline,
        'bdcsec50': this.state.hover && !this.state.focused && this.props.outline,
        'op50': this.props.disabled,
        'bdcpri': this.state.focused && this.props.outline
      });
      var descriptionClasses = (0, _classnames2['default'])('mt1/4', textStatusClass, {
        'csec70': !this.props.status
      });
      // Set as undefined if not available as '' would render an empty span
      var description = this.props.description ? _react2['default'].createElement(
        'p',
        { className: descriptionClasses, id: describeId },
        this.props.description
      ) : undefined;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'label',
          { className: labelClasses, htmlFor: inputId },
          this.props.label
        ),
        _react2['default'].createElement('input', _extends({}, this.props, {
          type: type,
          id: inputId,
          'aria-describedby': describeId,
          onMouseEnter: this._handleMouseEnter,
          onMouseLeave: this._handleMouseLeave,
          onFocus: this._handleFocus,
          onBlur: this._handleBlur,
          className: inputClasses })),
        description
      );
    }
  }]);

  return Input;
})(_react2['default'].Component);

Input.propTypes = {
  label: _react2['default'].PropTypes.string.isRequired,
  description: _react2['default'].PropTypes.string,
  type: _react2['default'].PropTypes.string,
  status: _react2['default'].PropTypes.string,
  outline: _react2['default'].PropTypes.bool,
  disabled: _react2['default'].PropTypes.bool,
  hideLabel: _react2['default'].PropTypes.bool,
  className: _react2['default'].PropTypes.string,
  onFocus: _react2['default'].PropTypes.func,
  onBlur: _react2['default'].PropTypes.func,
  onMouseEnter: _react2['default'].PropTypes.func,
  onMouseLeave: _react2['default'].PropTypes.func
};

exports['default'] = Input;
module.exports = exports['default'];