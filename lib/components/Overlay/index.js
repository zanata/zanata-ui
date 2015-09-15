'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOverlaysLibOverlay = require('react-overlays/lib/Overlay');

var _reactOverlaysLibOverlay2 = _interopRequireDefault(_reactOverlaysLibOverlay);

var _reactPropTypes = require('react-prop-types');

// import Fade from './Fade';

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Overlay = (function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    _get(Object.getPrototypeOf(Overlay.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var child = _props.children;
      var transition = _props.transition;

      var props = _objectWithoutProperties(_props, ['children', 'transition']);

      // if (transition === true) {
      //   transition = Fade
      // }

      if (!transition) {
        child = (0, _react.cloneElement)(child, {
          className: (0, _classnames2['default'])('op100', child.props.className)
        });
      }

      return _react2['default'].createElement(
        _reactOverlaysLibOverlay2['default'],
        _extends({}, props, {
          transition: transition
        }),
        child
      );
    }
  }], [{
    key: 'propTypes',
    value: _extends({}, _reactOverlaysLibOverlay2['default'].propTypes, {
      /**
       * Set the visibility of the Overlay
       */
      show: _react2['default'].PropTypes.bool,
      /**
       * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
       */
      rootClose: _react2['default'].PropTypes.bool,
      /**
       * A Callback fired by the Overlay when it wishes to be hidden.
       */
      onHide: _react2['default'].PropTypes.func,
      /**
       * Use animation
       */
      animation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _reactPropTypes.elementType]),
      /**
       * Callback fired before the Overlay transitions in
       */
      onEnter: _react2['default'].PropTypes.func,
      /**
       * Callback fired as the Overlay begins to transition in
       */
      onEntering: _react2['default'].PropTypes.func,
      /**
       * Callback fired after the Overlay finishes transitioning in
       */
      onEntered: _react2['default'].PropTypes.func,
      /**
       * Callback fired right before the Overlay transitions out
       */
      onExit: _react2['default'].PropTypes.func,
      /**
       * Callback fired as the Overlay begins to transition out
       */
      onExiting: _react2['default'].PropTypes.func,
      /**
       * Callback fired after the Overlay finishes transitioning out
       */
      onExited: _react2['default'].PropTypes.func
    }),
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      transition: null,
      rootClose: false,
      show: false
    },
    enumerable: true
  }]);

  return Overlay;
})(_react2['default'].Component);

exports['default'] = Overlay;
module.exports = exports['default'];