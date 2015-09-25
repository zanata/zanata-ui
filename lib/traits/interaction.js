'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = {
  componentWillMount: function componentWillMount() {
    this.setState({
      hovered: false,
      focused: false,
      active: false,
      mouseUpHandler: this.handleMouseUpClass.bind(this),
      mouseMoveHandler: this.handleMouseOutClass.bind(this)
    });
  },
  componentDidMount: function componentDidMount() {
    _react2['default'].findDOMNode(this).addEventListener('focus', this.handleFocusClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('blur', this.handleBlurClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mouseover', this.handleMouseOverClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mouseout', this.handleMouseOutClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mousedown', this.handleMouseDownClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mouseup', this.state.mouseUpHandler);
  },
  componentWillUnmount: function componentWillUnmount() {
    window.removeEventListener('mouseup', this.state.mouseUpHandler);
    window.removeEventListener('mousemove', this.state.mouseMoveHandler);
    _react2['default'].findDOMNode(this).removeEventListener('focus', this.handleFocusClass);
    _react2['default'].findDOMNode(this).removeEventListener('blur', this.handleBlurClass);
    _react2['default'].findDOMNode(this).removeEventListener('mouseover', this.handleMouseOverClass);
    _react2['default'].findDOMNode(this).removeEventListener('mouseout', this.handleMouseOutClass);
    _react2['default'].findDOMNode(this).removeEventListener('mousedown', this.handleMouseDownClass);
    _react2['default'].findDOMNode(this).removeEventListener('mouseup', this.state.mouseUpHandler);
  },
  handleFocusClass: function handleFocusClass() {
    this.setState({ focused: true });
  },
  handleBlurClass: function handleBlurClass() {
    this.setState({ focused: false });
  },
  handleMouseOverClass: function handleMouseOverClass() {
    this.setState({ hovered: true });
  },
  handleMouseOutClass: function handleMouseOutClass(event) {
    this.setState({ hovered: false });
    window.removeEventListener('mousemove', this.state.mouseMoveHandler);
  },
  handleMouseDownClass: function handleMouseDownClass() {
    this.setState({ active: true });
    // Need this to detect mouseup outside of button
    window.addEventListener('mouseup', this.state.mouseUpHandler);
    window.addEventListener('mousemove', this.state.mouseMoveHandler);
  },
  handleMouseUpClass: function handleMouseUpClass(event) {
    this.setState({ active: false });
    event.stopPropagation();
    window.removeEventListener('mouseup', this.state.mouseUpHandler);
  },
  getState: function getState(disabler) {
    var is = {
      disabled: false,
      active: false,
      hovered: false,
      focused: false,
      'default': false
    };
    if (this.props.disabled || disabler) {
      is.disabled = true;
    } else if (this.state.active) {
      is.active = true;
    } else if (this.state.hovered) {
      is.hovered = true;
    } else if (this.state.focused) {
      is.focused = true;
    } else {
      is['default'] = true;
    }
    return is;
  }
};
module.exports = exports['default'];