'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _reactStampit = require('react-stampit');

var _reactStampit2 = _interopRequireDefault(_reactStampit);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ButtonExampleFactory = function ButtonExampleFactory(React) {
  return (0, _reactStampit2['default'])(React, {
    init: function init() {
      this.state = {
        loading: false
      };
    },
    _handleClick: function _handleClick() {
      var _this = this;

      this.setState({ loading: true });
      setTimeout(function () {
        _this.setState({ loading: false });
      }, 3000);
    },
    render: function render() {
      var _this2 = this;

      var _state = this.state;
      var loading = _state.loading;

      var state = _objectWithoutProperties(_state, ['loading']);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          { className: 'fz4 fwl mb1 mt2 csec' },
          'Buttons'
        ),
        React.createElement(
          'h3',
          { className: 'fz3 fwsb mb1/2 csec' },
          'Sizes'
        ),
        React.createElement(
          'p',
          null,
          'Buttons have their own scale, that is based off font scale cut skips sizes'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', size: '-1', kind: 'default' },
          'Size Negative 1 button'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', kind: 'default' },
          'Default button'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', size: '1', kind: 'default' },
          'Size 1 button'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', size: '2', kind: 'default' },
          'Size 2 button'
        ),
        React.createElement(
          'h3',
          { className: 'fz3 fwsb mt1 mb1/2 csec' },
          'Loading'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', kind: 'default', onClick: function () {
              return _this2._handleClick();
            }, loading: loading },
          'Default loading button'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', kind: 'primary', onClick: function () {
              return _this2._handleClick();
            }, loading: loading },
          'Primary loading button'
        ),
        React.createElement(
          _2['default'],
          { className: 'mr1', kind: 'success', onClick: function () {
              return _this2._handleClick();
            }, size: '2', loading: loading },
          'Success size 2 loading button'
        )
      );
    }
  });
};

exports['default'] = ButtonExampleFactory(_react2['default']);
module.exports = exports['default'];