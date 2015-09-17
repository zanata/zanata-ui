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

var _reactOverlays = require('react-overlays');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var commonClasses = (0, _classnames2['default'])('posf a0');

var modalClasses = (0, _classnames2['default'])(commonClasses, 'z5 ffsans');

var backdropClasses = (0, _classnames2['default'])(commonClasses, 'z4 bgcblack op50');

var Modal = (function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var closeButton = _props.closeButton;

      var props = _objectWithoutProperties(_props, ['children', 'closeButton']);

      var close = closeButton ? _react2['default'].createElement(
        'button',
        { 'aria-label': props.closeLabel, className: 'posa r0 t0 p1/2 dfx aic jcc csec70a z1', onClick: props.onHide },
        _react2['default'].createElement(_Icon2['default'], { name: 'cross', size: '2', className: 'op70' })
      ) : undefined;
      return _react2['default'].createElement(
        _reactOverlays.Modal,
        _extends({}, props, {
          containerClassName: 'has-modal',
          backdropClassName: backdropClasses,
          className: modalClasses
        }),
        _react2['default'].createElement(
          'div',
          { className: 'dfx aic jcc posr z5 h100p pv1/2' },
          _react2['default'].createElement(
            'div',
            { className: 'dfx fxdc w32 bxsh5 bgcwhite95a mh1/2 mv1 mah100p ovh bdrs3/4 posr tac' },
            close,
            children
          )
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react2['default'].PropTypes.node,
      closeButton: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      closeButton: true,
      closeLabel: 'Close'
    },
    enumerable: true
  }]);

  return Modal;
})(_react2['default'].Component);

Modal.Header = _ModalHeader2['default'];
Modal.Title = _ModalTitle2['default'];
Modal.Body = _ModalBody2['default'];
Modal.Footer = _ModalFooter2['default'];

exports['default'] = Modal;
module.exports = exports['default'];