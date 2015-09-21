'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _reactStampit = require('react-stampit');

var _reactStampit2 = _interopRequireDefault(_reactStampit);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactMotion = require('react-motion');

var _traitsInteraction = require('../../traits/interaction');

var _traitsInteraction2 = _interopRequireDefault(_traitsInteraction);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var ButtonFactory = function ButtonFactory(React) {
  var string = _react.PropTypes.string;
  var node = _react.PropTypes.node;
  var bool = _react.PropTypes.bool;
  var number = _react.PropTypes.number;
  var oneOf = _react.PropTypes.oneOf;

  var kindsClasses = {
    link: 'cpri',
    'default': 'bgcwhite50a cpri bd bdcblack10a',
    primary: 'cwhite bgcpri',
    success: 'cwhite bgcsuccess',
    unsure: 'cblack70a bgcunsure',
    warning: 'cwhite bgcwarning',
    danger: 'cwhite bgcdanger'
  };
  return (0, _reactStampit2['default'])(React, {
    propTypes: {
      children: node,
      disabled: bool,
      padding: string,
      size: number,
      kind: oneOf(Object.keys(kindsClasses)),
      className: string,
      loading: bool,
      bdrs: string
    },
    defaultProps: {
      kind: 'link',
      size: 0
    },
    render: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var kind = _props.kind;
      var disabled = _props.disabled;
      var size = _props.size;
      var loading = _props.loading;
      var bdrs = _props.bdrs;
      var padding = _props.padding;

      var props = _objectWithoutProperties(_props, ['children', 'className', 'kind', 'disabled', 'size', 'loading', 'bdrs', 'padding']);

      var _state = this.state;
      var hovered = _state.hovered;
      var focused = _state.focused;
      var active = _state.active;

      var state = _objectWithoutProperties(_state, ['hovered', 'focused', 'active']);

      var sizeClasses = function sizeClasses(kind) {
        if (kind === 'link') return padding || null;
        switch (parseInt(size, 10)) {
          case -1:
            return 'fzn1 ' + (padding || 'ph1/2 pv1/8');
          case 0:
            return padding || 'fz0 pv1/4 ph3/4';
          case 1:
            return 'fz2 ' + (padding || 'pv1/4 ph3/4');
          case 2:
            return 'fz4 ' + (padding || 'pv1/4 ph1');
          default:
            return padding || 'fz0 pv1/4 ph3/4';
        }
      };
      var disable = disabled || loading;
      var buttonClasses = (0, _classnames2['default'])('posr ovh trsaeo', className, sizeClasses(kind), bdrs || 'bdrs', kindsClasses[kind], {
        'whsnw difx aic jcsb': kind !== 'link',
        'curd': disable,
        'bxsh1': (!hovered && !focused || active) && kind !== 'link' && !disable,
        'csec': active && kind === 'link' && !disable,
        'bxsh2': (hovered || focused) && !active && kind !== 'link' && !disable,
        'op70': (hovered || focused) && !active && kind === 'link' && !disable
      });
      var buttonInteractiveClasses = (0, _classnames2['default'])('posa a0', bdrs || 'bdrs', {
        'bgclighten20': kind !== 'link' && !disable,
        'bgclighten40': disable,
        'op0': !hovered && !focused && !active && kind !== 'link' && !disable
      });
      var buttonChildClasses = (0, _classnames2['default'])('posr z1');
      var springConfig = [290, 17];
      var buttonChild = React.createElement(
        _reactMotion.Spring,
        { defaultValue: { val: 0 }, endValue: { val: loading ? -150 : 0, config: springConfig } },
        function (interpolated) {
          return React.createElement(
            'span',
            { className: buttonChildClasses, style: { transform: 'translateY(' + interpolated.val + '%)' } },
            children
          );
        }
      );
      var buttonLoaderClasses = (0, _classnames2['default'])('posa a0 dfx jcc aic z2');
      var buttonLoaderSize = loading ? parseInt(size, 10) + 4 : null;
      var buttonLoader = React.createElement(
        _reactMotion.Spring,
        { defaultValue: { val: 150 }, endValue: { val: loading ? 0 : 150, config: springConfig } },
        function (interpolated) {
          return React.createElement(
            'span',
            { className: buttonLoaderClasses, style: { transform: 'translateY(' + interpolated.val + '%)' } },
            React.createElement(_Loader2['default'], { size: buttonLoaderSize })
          );
        }
      );
      return React.createElement(
        'button',
        _extends({}, props, { className: buttonClasses, disabled: disabled || loading }),
        React.createElement('span', { className: buttonInteractiveClasses }),
        buttonChild,
        buttonLoader
      );
    }
  });
};

exports['default'] = ButtonFactory(_react2['default']).compose(_traitsInteraction2['default']);
module.exports = exports['default'];