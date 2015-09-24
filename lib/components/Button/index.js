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

var classes = {
  'default': 'posr ovh trsaeo',
  states: {
    disabled: 'curd op70'
  },
  button: {
    'default': 'whsnw',
    states: {
      'default': 'bxsh1',
      hover: 'bxsh2',
      focus: 'bxsh2',
      active: 'bxsh1'
    },
    bdrs: 'bdrs',
    size: {
      '-1': 'fzn1 ph1/2 h1',
      '0': 'fz0 h1&1/2 ph3/4',
      '1': 'fz1 h2 ph3/4',
      '2': 'fz2 h2&1/2 ph1'
    },
    kind: {
      'default': 'bgcwhite50a cpri bd bdcblack10a',
      muted: 'bgcsec30 cpri bd bdcblack10a',
      primary: 'cwhite bgcpri',
      success: 'cwhite bgcsuccess',
      unsure: 'cblack70a bgcunsure',
      warning: 'cwhite bgcwarning',
      danger: 'cwhite bgcdanger'
    },
    interactive: {
      'default': 'posa a0',
      states: {
        'default': 'op0',
        hover: 'bgclighten20',
        focus: 'bgclighten20',
        active: 'op0',
        disabled: 'op0'
      }
    }
  },
  link: {
    states: {
      hover: 'cdarken20',
      focus: 'cdarken20',
      active: 'cdarken40'
    },
    kind: {
      'default': 'cpri',
      muted: 'csec30',
      primary: 'cpri',
      success: 'csuccess',
      unsure: 'cunsure',
      warning: 'cwarning',
      danger: 'cdanger'
    }
  },
  child: {
    'default': 'posr z1 difx aic jcsb h100p'
  },
  loader: {
    'default': 'posa a0 dfx jcc aic z2'
  }
};

var ButtonFactory = function ButtonFactory(React) {
  var string = _react.PropTypes.string;
  var node = _react.PropTypes.node;
  var bool = _react.PropTypes.bool;
  var number = _react.PropTypes.number;
  var oneOf = _react.PropTypes.oneOf;

  return (0, _reactStampit2['default'])(React, {
    propTypes: {
      children: node,
      disabled: bool,
      padding: string,
      size: number,
      link: bool,
      kind: oneOf(Object.keys(classes.button.kind)),
      className: string,
      loading: bool,
      bdrs: string
    },
    defaultProps: {
      kind: 'default',
      size: 0
    },
    render: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var kind = _props.kind;
      var link = _props.link;
      var disabled = _props.disabled;
      var size = _props.size;
      var loading = _props.loading;
      var bdrs = _props.bdrs;
      var padding = _props.padding;

      var props = _objectWithoutProperties(_props, ['children', 'className', 'kind', 'link', 'disabled', 'size', 'loading', 'bdrs', 'padding']);

      var _state = this.state;
      var hovered = _state.hovered;
      var focused = _state.focused;
      var active = _state.active;

      var state = _objectWithoutProperties(_state, ['hovered', 'focused', 'active']);

      var disable = disabled || loading;
      var interativeState = this.getState();
      var buttonClasses = (0, _classnames2['default'])(className, classes['default'], classes.button['default'], padding || classes.button.size[size], bdrs || classes.button.bdrs, classes.button.kind[kind], disable && classes.states.disabled, interativeState === 'active' && classes.button.states.active, interativeState === 'hovered' && classes.button.states.hover, interativeState === 'focused' && classes.button.states.focus, interativeState === 'default' && classes.button.states['default']);
      var linkClasses = (0, _classnames2['default'])(className, classes['default'], classes.link['default'], padding, disable && classes.disabled, classes.link.kind[kind], disable && classes.states.disabled, interativeState === 'active' && classes.link.states.active, interativeState === 'hovered' && classes.link.states.hover, interativeState === 'focused' && classes.link.states.focus);
      var buttonInteractiveClasses = (0, _classnames2['default'])(classes.button.interactive['default'], bdrs || classes.button.bdrs, disable && classes.button.interactive.states.disabled, interativeState === 'active' && classes.button.interactive.states.active, interativeState === 'hovered' && classes.button.interactive.states.hover, interativeState === 'focused' && classes.button.interactive.states.focus, interativeState === 'default' && classes.button.interactive.states['default']);
      var buttonInteractive = !link ? React.createElement('span', { className: buttonInteractiveClasses }) : null;
      var springConfig = [290, 17];
      var buttonChild = React.createElement(
        _reactMotion.Spring,
        { defaultValue: { val: 0 }, endValue: { val: loading ? -150 : 0, config: springConfig } },
        function (interpolated) {
          return React.createElement(
            'span',
            { className: classes.child['default'], style: {
                transform: 'translateY(' + interpolated.val + '%)',
                marginTop: size === -1 && 1
              } },
            children
          );
        }
      );
      var buttonLoaderSize = loading ? parseInt(size, 10) + 4 : null;
      var buttonLoader = React.createElement(
        _reactMotion.Spring,
        { defaultValue: { val: 150 }, endValue: { val: loading ? 0 : 150, config: springConfig } },
        function (interpolated) {
          return React.createElement(
            'span',
            { className: classes.loader['default'], style: { transform: 'translateY(' + interpolated.val + '%)' } },
            React.createElement(_Loader2['default'], { size: buttonLoaderSize })
          );
        }
      );
      return React.createElement(
        'button',
        _extends({}, props, { className: link ? linkClasses : buttonClasses, disabled: disabled || loading }),
        buttonInteractive,
        buttonChild,
        buttonLoader
      );
    }
  });
};

exports['default'] = ButtonFactory(_react2['default']).compose(_traitsInteraction2['default']);
module.exports = exports['default'];