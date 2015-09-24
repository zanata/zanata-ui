'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = {
  componentWillMount: function componentWillMount() {
    this.setState(this.state || {});
    this.setState({
      hovered: false,
      focused: false,
      active: false
    });
  },
  componentDidMount: function componentDidMount() {
    _react2['default'].findDOMNode(this).addEventListener('focus', this.onFocusClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('blur', this.onBlurClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mouseover', this.onMouseOverClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mouseout', this.onMouseOutClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mousedown', this.onMouseDownClass.bind(this));
    _react2['default'].findDOMNode(this).addEventListener('mouseup', this.onMouseUpClass.bind(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    _react2['default'].findDOMNode(this).removeEventListener('focus', this.onFocusClass);
    _react2['default'].findDOMNode(this).removeEventListener('blur', this.onBlurClass);
    _react2['default'].findDOMNode(this).removeEventListener('mouseover', this.onMouseOverClass);
    _react2['default'].findDOMNode(this).removeEventListener('mouseout', this.onMouseOutClass);
    _react2['default'].findDOMNode(this).removeEventListener('mousedown', this.onMouseDownClass);
    _react2['default'].findDOMNode(this).removeEventListener('mouseup', this.onMouseUpClass);
    document.body.removeEventListener('mouseup', this.onMouseUpClass);
  },
  onFocusClass: function onFocusClass() {
    this.setState({ focused: true });
  },
  onBlurClass: function onBlurClass() {
    this.setState({ focused: false });
  },
  onMouseOverClass: function onMouseOverClass() {
    this.setState({ hovered: true });
  },
  onMouseOutClass: function onMouseOutClass() {
    this.setState({ hovered: false });
  },
  onMouseDownClass: function onMouseDownClass() {
    this.setState({ active: true });
    // Need this to detect mouseup outside of button
    document.body.addEventListener('mouseup', this.onMouseUpClass.bind(this));
  },
  onMouseUpClass: function onMouseUpClass() {
    this.setState({ active: false });
    document.body.removeEventListener('mouseup', this.onMouseUpClass);
  },
  getState: function getState() {
    if (this.props.disabled) {
      return 'disabled';
    } else if (this.state.active) {
      return 'active';
    } else if (this.state.hovered) {
      return 'hovered';
    } else if (this.state.focused) {
      return 'focused';
    } else {
      return 'default';
    }
  }
};
module.exports = exports['default'];