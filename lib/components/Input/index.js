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

var _utilsCreateChainedFunction = require('../../utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _KeyComponent2 = require('../KeyComponent');

var _KeyComponent3 = _interopRequireDefault(_KeyComponent2);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _React$PropTypes = _react2['default'].PropTypes;
var string = _React$PropTypes.string;
var func = _React$PropTypes.func;
var bool = _React$PropTypes.bool;
var oneOf = _React$PropTypes.oneOf;

var Input = (function (_KeyComponent) {
  _inherits(Input, _KeyComponent);

  function Input() {
    var _this = this;

    _classCallCheck(this, Input);

    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      focused: false,
      hover: false,
      value: this.props.value
    };
    this.inputId = this.props.id || (0, _lodash.uniqueId)((0, _lodash.camelCase)(this.props.label) + '_');

    this._handleChange = function (event) {
      var value = event.target.value;
      _this.setState({ value: value });
    };

    this._handleFocus = function () {
      if (!_this.props.disabled) {
        _this.setState({ focused: true });
        _this.bindGlobalShortcut('esc', _this._handleReset);
      }
    };

    this._handleBlur = function () {
      _this.setState({ focused: false });
      _this.unbindShortcut('esc');
    };

    this._handleMouseEnter = function () {
      if (!_this.props.disabled) {
        _this.setState({ hover: true });
      }
    };

    this._handleMouseLeave = function () {
      _this.setState({ hover: false });
    };

    this._handleReset = function () {
      if (_this.props.reset && _this.state.value) {
        _this.setState({ value: '' }, function () {
          _react2['default'].findDOMNode(_this.refs[_this.inputId]).focus();
        });
      }
    };
  }

  _createClass(Input, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !(0, _shallowequal2['default'])(nextProps, this.props) || !(0, _shallowequal2['default'])(nextState, this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var type = this.props.type || 'text';
      var describeId = this.props.description ? this.inputId + '_d' : undefined;
      var inputStatusClass = this.props.status ? 'bdc' + this.props.status : undefined;
      var textStatusClass = this.props.status ? 'c' + this.props.status : undefined;
      var outline = this.props.border === 'outline';
      var underline = this.props.border === 'underline';
      var border = outline || underline;
      var marginClass = this.props.margin || undefined;
      var onChange = (0, _utilsCreateChainedFunction2['default'])(this._handleChange, this.props.onChange);
      var onFocus = (0, _utilsCreateChainedFunction2['default'])(this._handleFocus, this.props.onFocus);
      var onBlur = (0, _utilsCreateChainedFunction2['default'])(this._handleBlur, this.props.onBlur);
      var onMouseEnter = (0, _utilsCreateChainedFunction2['default'])(this._handleMouseEnter, this.props.onMouseEnter);
      var onMouseLeave = (0, _utilsCreateChainedFunction2['default'])(this._handleMouseLeave, this.props.onMouseLeave);
      var value = this.state.value;
      var labelClasses = (0, _classnames2['default'])('db fwsb csec pv1/4', textStatusClass, {
        'sronly': this.props.hideLabel
      });
      var inputClasses = (0, _classnames2['default'])(this.props.className, inputStatusClass, {
        'h1&1/2': border,
        'pl1/4 bd2 bdrs1/4': outline,
        'bdb2': underline,
        'pr1/4': outline && !this.props.reset,
        'pr1': this.props.reset,
        'bdcsec30': !this.state.hover && !this.state.focused && border && !inputStatusClass,
        'bdcsec50': this.state.hover && !this.state.focused && border && !inputStatusClass,
        'op50': this.props.disabled,
        'bdcpri': this.state.focused && border && !inputStatusClass
      });
      var descriptionClasses = (0, _classnames2['default'])('mt1/4 op70', textStatusClass, {
        'csec': !this.props.status
      });
      var resetClasses = (0, _classnames2['default'])('z1 posa r0 t0 h100p ph1/4 csec50 aic', {
        'dn': !this.state.value,
        'dfx': this.state.value
      });
      // Set as undefined if not available as '' would render an empty span
      var description = this.props.description ? _react2['default'].createElement(
        'p',
        { className: descriptionClasses, id: describeId },
        this.props.description
      ) : undefined;
      var reset = this.props.reset ? _react2['default'].createElement(
        'button',
        { className: resetClasses, onClick: this._handleReset },
        _react2['default'].createElement(
          'span',
          { className: 'sronly' },
          'Reset'
        ),
        _react2['default'].createElement(_Icon2['default'], { name: 'cross' })
      ) : undefined;

      return _react2['default'].createElement(
        'div',
        { className: marginClass },
        _react2['default'].createElement(
          'label',
          { className: labelClasses, htmlFor: this.inputId },
          this.props.label
        ),
        _react2['default'].createElement(
          'div',
          { className: 'posr' },
          _react2['default'].createElement('input', _extends({}, this.props, {
            type: type,
            id: this.inputId,
            ref: this.inputId,
            value: value,
            'aria-describedby': describeId,
            onChange: onChange,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onFocus: onFocus,
            onBlur: onBlur,
            className: inputClasses })),
          reset
        ),
        description
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      label: string.isRequired,
      placeholder: string.isRequired,
      description: string,
      type: string,
      value: string,
      id: string,
      status: string,
      border: oneOf(['none', 'outline', 'underline']),
      disabled: bool,
      margin: string,
      hideLabel: bool,
      reset: bool,
      className: string,
      onChange: func,
      onFocus: func,
      onBlur: func,
      onMouseEnter: func,
      onMouseLeave: func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      border: 'none'
    },
    enumerable: true
  }]);

  return Input;
})(_KeyComponent3['default']);

exports['default'] = Input;
module.exports = exports['default'];

// Non Standard Events