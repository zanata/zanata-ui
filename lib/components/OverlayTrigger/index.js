/* eslint-disable react/prop-types */
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

var _domHelpersQueryContains = require('dom-helpers/query/contains');

var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);

var _utilsCreateChainedFunction = require('../../utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsCreateContextWrapper = require('../../utils/createContextWrapper');

var _utilsCreateContextWrapper2 = _interopRequireDefault(_utilsCreateContextWrapper);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _reactLibWarning = require('react/lib/warning');

var _reactLibWarning2 = _interopRequireDefault(_reactLibWarning);

var _lodash = require('lodash');

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var OverlayTrigger = (function (_React$Component) {
  _inherits(OverlayTrigger, _React$Component);

  function OverlayTrigger() {
    var _this = this;

    _classCallCheck(this, OverlayTrigger);

    _get(Object.getPrototypeOf(OverlayTrigger.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      isOverlayShown: this.props.defaultOverlayShown
    };

    this.show = function () {
      _this.setState({
        isOverlayShown: true
      });
    };

    this.hide = function () {
      _this.setState({
        isOverlayShown: false
      });
    };

    this.toggle = function () {
      if (_this.state.isOverlayShown) {
        _this.hide();
      } else {
        _this.show();
      }
    };

    this.getOverlayTarget = function () {
      return _react2['default'].findDOMNode(_this);
    };

    this.getOverlay = function () {
      var overlayProps = _extends({}, (0, _lodash.pick)(_this.props, Object.keys(_Overlay2['default'].propTypes)), {
        show: _this.state.isOverlayShown,
        onHide: _this.hide,
        target: _this.getOverlayTarget,
        onExit: _this.props.onExit,
        onExiting: _this.props.onExiting,
        onExited: _this.props.onExited,
        onEnter: _this.props.onEnter,
        onEntering: _this.props.onEntering,
        onEntered: _this.props.onEntered
      });

      var overlay = (0, _react.cloneElement)(_this.props.overlay, {
        placement: overlayProps.placement,
        container: overlayProps.container
      });

      return _react2['default'].createElement(
        _Overlay2['default'],
        overlayProps,
        overlay
      );
    };

    this.handleDelayedShow = function () {
      if (_this._hoverDelay != null) {
        clearTimeout(_this._hoverDelay);
        _this._hoverDelay = null;
        return;
      }

      var delay = _this.props.delayShow != null ? _this.props.delayShow : _this.props.delay;

      if (!delay) {
        _this.show();
        return;
      }

      _this._hoverDelay = setTimeout(function () {
        _this._hoverDelay = null;
        _this.show();
      }, delay);
    };

    this.handleDelayedHide = function () {
      if (_this._hoverDelay != null) {
        clearTimeout(_this._hoverDelay);
        _this._hoverDelay = null;
        return;
      }

      var delay = _this.props.delayHide != null ? _this.props.delayHide : _this.props.delay;

      if (!delay) {
        _this.hide();
        return;
      }

      _this._hoverDelay = setTimeout(function () {
        _this._hoverDelay = null;
        _this.hide();
      }, delay);
    };

    this.handleMouseOverOut = function (handler, e) {
      var target = e.currentTarget;
      var related = e.relatedTarget || e.nativeEvent.toElement;

      if (!related || related !== target && !(0, _domHelpersQueryContains2['default'])(target, related)) {
        handler(e);
      }
    };
  }

  /**
   * Creates a new OverlayTrigger class that forwards the relevant context
   *
   * This static method should only be called at the module level, instead of in
   * e.g. a render() method, because it's expensive to create new classes.
   *
   * For example, you would want to have:
   *
   * > export default OverlayTrigger.withContext({
   * >   myContextKey: React.PropTypes.object
   * > })
   *
   * and import this when needed.
   */

  _createClass(OverlayTrigger, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.handleMouseOver = this.handleMouseOverOut.bind(null, this.handleDelayedShow);
      this.handleMouseOut = this.handleMouseOverOut.bind(null, this.handleDelayedHide);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mountNode = document.createElement('div');
      _react2['default'].render(this._overlay, this._mountNode);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _react2['default'].unmountComponentAtNode(this._mountNode);
      this._mountNode = null;
      clearTimeout(this._hoverDelay);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this._mountNode) {
        _react2['default'].render(this._overlay, this._mountNode);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var trigger = _react2['default'].Children.only(this.props.children);
      var triggerProps = trigger.props;

      var props = {
        'aria-describedby': this.props.overlay.props.id
      };

      // create in render otherwise owner is lost...
      this._overlay = this.getOverlay();

      props.onClick = (0, _utilsCreateChainedFunction2['default'])(triggerProps.onClick, this.props.onClick);

      if (isOneOf('click', this.props.trigger)) {
        props.onClick = (0, _utilsCreateChainedFunction2['default'])(this.toggle, props.onClick);
      }

      if (isOneOf('hover', this.props.trigger)) {
        (0, _reactLibWarning2['default'])(!(this.props.trigger === 'hover'), '[zanata-ui] Specifying only the `"hover"` trigger limits the visibilty of the overlay to just mouse users. ' + 'Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.');

        props.onMouseOver = (0, _utilsCreateChainedFunction2['default'])(this.handleMouseOver, this.props.onMouseOver, triggerProps.onMouseOver);
        props.onMouseOut = (0, _utilsCreateChainedFunction2['default'])(this.handleMouseOut, this.props.onMouseOut, triggerProps.onMouseOut);
      }

      if (isOneOf('focus', this.props.trigger)) {
        props.onFocus = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedShow, this.props.onFocus, triggerProps.onFocus);
        props.onBlur = (0, _utilsCreateChainedFunction2['default'])(this.handleDelayedHide, this.props.onBlur, triggerProps.onBlur);
      }

      return (0, _react.cloneElement)(trigger, props);
    }
  }], [{
    key: 'propTypes',
    value: _extends({}, _Overlay2['default'].propTypes, {
      /**
      * Specify which action or actions trigger Overlay visibility
      */
      trigger: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']), _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.oneOf(['click', 'hover', 'focus']))]),
      /**
       * A millisecond delay amount to show and hide the Overlay once triggered
       */
      delay: _react2['default'].PropTypes.number,
      /**
       * A millisecond delay amount before showing the Overlay once triggered.
       */
      delayShow: _react2['default'].PropTypes.number,
      /**
       * A millisecond delay amount before hiding the Overlay once triggered.
       */
      delayHide: _react2['default'].PropTypes.number,

      /**
       * The initial visibility state of the Overlay, for more nuanced visibility controll consider
       * using the Overlay component directly.
       */
      defaultOverlayShown: _react2['default'].PropTypes.bool,

      /**
       * An element or text to overlay next to the target.
       */
      overlay: _react2['default'].PropTypes.node.isRequired,

      /**
       * @private
       */
      onBlur: _react2['default'].PropTypes.func,
      /**
       * @private
       */
      onClick: _react2['default'].PropTypes.func,
      /**
       * @private
       */
      onFocus: _react2['default'].PropTypes.func,
      /**
       * @private
       */
      onMouseEnter: _react2['default'].PropTypes.func,
      /**
       * @private
       */
      onMouseLeave: _react2['default'].PropTypes.func,
      // override specific overlay props
      /**
       * @private
       */
      target: function target() {},
      /**
      * @private
      */
      onHide: function onHide() {},
      /**
       * @private
       */
      show: function show() {}
    }),
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      defaultOverlayShown: false,
      trigger: ['hover', 'focus'],
      placement: 'top'
    },
    enumerable: true
  }]);

  return OverlayTrigger;
})(_react2['default'].Component);

exports['default'] = OverlayTrigger;
OverlayTrigger.withContext = (0, _utilsCreateContextWrapper2['default'])(OverlayTrigger, 'overlay');

exports['default'] = OverlayTrigger;
module.exports = exports['default'];

// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker moving
// from one child element to another.