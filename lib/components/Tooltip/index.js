'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypes = require('react-prop-types');

var _lodash = require('lodash');

var _React$PropTypes = _react2['default'].PropTypes;
var oneOf = _React$PropTypes.oneOf;
var oneOfType = _React$PropTypes.oneOfType;
var string = _React$PropTypes.string;
var number = _React$PropTypes.number;
var bool = _React$PropTypes.bool;
var node = _React$PropTypes.node;
var object = _React$PropTypes.object;

var Tooltip = (function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    _get(Object.getPrototypeOf(Tooltip.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Tooltip, [{
    key: 'render',
    value: function render() {
      var _tooltipArrowStyle, _tooltipArrowInnerStyle;

      var _props = this.props;
      var placement = _props.placement;
      var title = _props.title;
      var inverse = _props.inverse;
      var positionLeft = _props.positionLeft;
      var positionTop = _props.positionTop;
      var arrowOffsetLeft = _props.arrowOffsetLeft;
      var arrowOffsetTop = _props.arrowOffsetTop;
      var alignment = _props.alignment;
      var className = _props.className;
      var style = _props.style;
      var children = _props.children;

      var props = _objectWithoutProperties(_props, ['placement', 'title', 'inverse', 'positionLeft', 'positionTop', 'arrowOffsetLeft', 'arrowOffsetTop', 'alignment', 'className', 'style', 'children']);

      var arrowSize = 6;
      var alignmentClass = 'ta' + alignment.charAt(0);
      var placementInverse = (function () {
        switch (placement) {
          case 'top':
            return 'bottom';
          case 'bottom':
            return 'top';
          case 'left':
            return 'right';
          case 'right':
            return 'left';
          default:
            return;
        }
      })();
      var extraTooltipStyle = (function () {
        switch (placement) {
          case 'top':
            return { marginTop: -arrowSize };
          case 'bottom':
            return { marginTop: arrowSize };
          case 'left':
            return { marginLeft: -arrowSize };
          case 'right':
            return { marginLeft: arrowSize };
        }
      })();
      var tooltipClasses = (0, _classnames2['default'])(className, 'ffsans posa z4 fzn1', placement, alignmentClass);
      var tooltipStyle = _extends({
        left: positionLeft,
        top: positionTop,
        maxWidth: '16rem'
      }, extraTooltipStyle, style);
      var tooltipInnerClasses = (0, _classnames2['default'])('bdrs1/4 bd p1/4 bxsh3', {
        'csec bgcwhite bdcsec10': !inverse,
        'cwhite bgcblack80a bdctrans': inverse
      });
      var tooltipArrowClasses = (0, _classnames2['default'])('posa db w0 h0 bdss bdctrans z1');
      var tooltipArrowStyle = (_tooltipArrowStyle = {}, _defineProperty(_tooltipArrowStyle, placementInverse, -arrowSize), _defineProperty(_tooltipArrowStyle, 'borderWidth', arrowSize), _defineProperty(_tooltipArrowStyle, placement === 'left' || placement === 'right' ? 'marginTop' : 'marginLeft', -(arrowSize + 1)), _defineProperty(_tooltipArrowStyle, 'border' + (0, _lodash.capitalize)(placementInverse) + 'Width', 0), _defineProperty(_tooltipArrowStyle, 'border' + (0, _lodash.capitalize)(placement) + 'Color', inverse ? 'transparent' : 'rgb(210,226,231)'), _tooltipArrowStyle);
      var tooltipArrowInnerStyle = (_tooltipArrowInnerStyle = {
        borderWidth: arrowSize
      }, _defineProperty(_tooltipArrowInnerStyle, placementInverse, inverse ? 0 : 1), _defineProperty(_tooltipArrowInnerStyle, placement === 'left' || placement === 'right' ? 'bottom' : 'marginLeft', -arrowSize), _defineProperty(_tooltipArrowInnerStyle, 'border' + (0, _lodash.capitalize)(placementInverse) + 'Width', 0), _defineProperty(_tooltipArrowInnerStyle, 'border' + (0, _lodash.capitalize)(placement) + 'Color', inverse ? 'rgba(0,0,0,.8)' : '#fff'), _tooltipArrowInnerStyle);
      var tooltipTitleClasses = (0, _classnames2['default'])('ttu fzn2 mb1/4', {
        'csec70': !inverse,
        'cwhite70a': inverse
      });
      var tooltipTitle = title ? _react2['default'].createElement(
        'h2',
        { className: tooltipTitleClasses },
        title
      ) : undefined;

      return _react2['default'].createElement(
        'div',
        _extends({
          role: 'tooltip'
        }, props, {
          className: tooltipClasses,
          style: tooltipStyle
        }),
        _react2['default'].createElement(
          'div',
          {
            className: tooltipArrowClasses,
            style: _extends({ left: arrowOffsetLeft, top: arrowOffsetTop }, tooltipArrowStyle)
          },
          _react2['default'].createElement('div', { className: tooltipArrowClasses, style: tooltipArrowInnerStyle })
        ),
        _react2['default'].createElement(
          'div',
          { className: tooltipInnerClasses },
          tooltipTitle,
          children
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      /**
       * An html id attribute, necessary for accessibility
       * @type {string}
       * @required
       */
      id: (0, _reactPropTypes.isRequiredForA11y)(oneOfType([string, number])),
      /**
       * The direction the tooltip is positioned towards
       */
      placement: oneOf(['top', 'right', 'bottom', 'left']),
      /**
       * The `left` position value for the tooltip
       */
      positionLeft: number,
      /**
       * The `top` position value for the tooltip
       */
      positionTop: number,
      /**
       * The `left` position value for the tooltip arrow
       */
      arrowOffsetLeft: oneOfType([number, string]),
      /**
       * The `top` position value for the tooltip arrow
       */
      arrowOffsetTop: oneOfType([number, string]),
      /**
       * How to align the tooltip contents
       */
      alignment: oneOf(['center', 'left', 'right']),
      /**
       * The title of the tooltip
       */
      title: string,
      /**
       * Should this use the dark version of this component
       */
      inverse: bool,
      className: string,
      style: object,
      children: node
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      placement: 'top',
      alignment: 'center'
    },
    enumerable: true
  }]);

  return Tooltip;
})(_react2['default'].Component);

exports['default'] = Tooltip;
module.exports = exports['default'];