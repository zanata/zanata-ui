'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icons = require('../Icons');

var _Icons2 = _interopRequireDefault(_Icons);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonExample = require('../Button/example');

var _ButtonExample2 = _interopRequireDefault(_ButtonExample);

var _OverlayTrigger = require('../OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require('../Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _FixedDataTableExamplesObjectDataExample = require('../FixedDataTable/examples/ObjectDataExample');

var _FixedDataTableExamplesObjectDataExample2 = _interopRequireDefault(_FixedDataTableExamplesObjectDataExample);

var _ModalExamplesModalBasicExample = require('../Modal/examples/ModalBasicExample');

var _ModalExamplesModalBasicExample2 = _interopRequireDefault(_ModalExamplesModalBasicExample);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this = this;

    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);

    this._handleInputChange = function (event) {
      console.log(event.target.value);
    };

    this._handleInputFocus = function (customIndex) {
      return function (event) {
        console.info('focus', _this, customIndex, event);
      };
    };
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var tooltip = _react2['default'].createElement(
        _Tooltip2['default'],
        { id: 'tooltip' },
        _react2['default'].createElement(
          'strong',
          null,
          'Holy guacamole!'
        ),
        ' Check this info and all this other text I just added.'
      );

      var tooltipInverse = _react2['default'].createElement(
        _Tooltip2['default'],
        { id: 'tooltip', inverse: true },
        _react2['default'].createElement(
          'strong',
          null,
          'Holy guacamole!'
        ),
        ' I\'m so dark guys'
      );

      var tooltipWithTitle = _react2['default'].createElement(
        _Tooltip2['default'],
        { id: 'tooltipTitle', title: 'Look at my title' },
        'Wow I really have a title.'
      );

      var tooltipInverseWithTitle = _react2['default'].createElement(
        _Tooltip2['default'],
        { id: 'tooltipTitle', title: 'Look at my title', inverse: true },
        'Wow I really have a title and I\'m dark.'
      );

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_Icons2['default'], { fileName: './src/components/Icons/icons.svg' }),
        _react2['default'].createElement(
          'h1',
          { className: 'fz5 csec mb1' },
          'Patterns'
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'fz4 fwl mb1 csec' },
          'Icons'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'mb1' },
          _react2['default'].createElement(_Icon2['default'], { name: 'admin' })
        ),
        _react2['default'].createElement(
          'p',
          { className: 'mb1' },
          'More to come'
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'fz4 fwl mb1 csec' },
          'Loader'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb1 dfx aic' },
          'Default loader size: ',
          _react2['default'].createElement(
            'span',
            { className: 'p1/4 bgcsec10 bdrs ml1/2 mr1 h1&1/2 w1&1/2 difx aic jcc' },
            _react2['default'].createElement(_Loader2['default'], null)
          ),
          ' Size 5 Loader: ',
          _react2['default'].createElement(_Loader2['default'], { className: 'dib ml1/2', size: '5' })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb1 dfx aic' },
          'Size 10 loader: ',
          _react2['default'].createElement(_Loader2['default'], { size: '10', className: 'ml1/2' })
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'fz4 fwl mb1 csec' },
          'Forms'
        ),
        _react2['default'].createElement(
          'h3',
          { className: 'fz3 fwsb mb1/2 csec' },
          'Inputs'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'w16' },
          _react2['default'].createElement(_Input2['default'], { label: 'Test input', placeholder: 'Test input no outline', className: 'w100p mb1' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input outline', placeholder: 'Test input with outline', outline: true, className: 'w100p mb1&1/2' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input hidden', placeholder: 'Test input with hidden label', outline: true, hideLabel: true, className: 'w100p mb1' }),
          _react2['default'].createElement(
            'div',
            { className: 'mb1' },
            _react2['default'].createElement(_Input2['default'], { label: 'Test input with description', placeholder: 'Test input with description', description: 'This is a great input box that you should totally fill in', outline: true, className: 'w100p' })
          ),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input disabled', placeholder: 'Test input disabled', value: 'I\'m disabled', disabled: true, outline: true, className: 'w100p mb1' }),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input error', onChange: this._handleInputChange, placeholder: 'This can\'t be empty', status: 'danger', outline: true, className: 'w100p mb1' }),
          _react2['default'].createElement(
            'div',
            { className: 'mb1' },
            _react2['default'].createElement(_Input2['default'], { label: 'Test input success with description', onFocus: this._handleInputFocus(4), placeholder: 'Success', value: 'Awwww yeeeah!', description: 'Great job you got it right', status: 'success', outline: true, className: 'w100p' })
          ),
          _react2['default'].createElement(_Input2['default'], { label: 'Test input with reset', placeholder: 'You can reset this input', outline: true, reset: true, className: 'w100p mb1' })
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'fz4 fwl mb1 mt2 csec' },
          'Fixed Data Table'
        ),
        _react2['default'].createElement(
          'h3',
          { className: 'fz3 fwsb mb1/2 csec' },
          'Basic'
        ),
        _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_FixedDataTableExamplesObjectDataExample2['default'], null)
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'fz4 fwl mb1 mt2 csec' },
          'Overlays'
        ),
        _react2['default'].createElement(
          'p',
          { className: 'mb1' },
          'See ',
          _react2['default'].createElement(
            'a',
            { href: 'http://react-bootstrap.github.io/react-overlays/examples/#overlay', className: 'cpri' },
            'overlay docs'
          ),
          ' for more info.'
        ),
        _react2['default'].createElement(
          'h3',
          { className: 'fz3 fwsb mb1/2 csec' },
          'Tooltip'
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb1' },
          _react2['default'].createElement(
            _OverlayTrigger2['default'],
            { trigger: 'click', overlay: tooltip },
            _react2['default'].createElement(
              _Button2['default'],
              { kind: 'default' },
              ' Show a tooltip on click'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb2' },
          _react2['default'].createElement(
            _OverlayTrigger2['default'],
            { placement: 'bottom', overlay: tooltip },
            _react2['default'].createElement(
              _Button2['default'],
              { kind: 'success' },
              ' Show a bottom tooltip'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb1 dfx jcsb' },
          _react2['default'].createElement(
            _OverlayTrigger2['default'],
            { placement: 'right', trigger: 'click', overlay: tooltipInverse },
            _react2['default'].createElement(
              _Button2['default'],
              { kind: 'unsure' },
              ' Show a right tooltip with inverse tooltip on click'
            )
          ),
          _react2['default'].createElement(
            _OverlayTrigger2['default'],
            { placement: 'left', overlay: tooltipWithTitle },
            _react2['default'].createElement(
              _Button2['default'],
              { kind: 'danger', disabled: true },
              ' Show a left tooltip with title'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb2' },
          _react2['default'].createElement(
            _OverlayTrigger2['default'],
            { trigger: 'click', overlay: tooltipInverseWithTitle },
            _react2['default'].createElement(
              _Button2['default'],
              { kind: 'warning' },
              ' Show a inverse tooltip with title'
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb2' },
          _react2['default'].createElement(_ModalExamplesModalBasicExample2['default'], null)
        ),
        _react2['default'].createElement(
          'div',
          { className: 'mb2' },
          _react2['default'].createElement(_ButtonExample2['default'], null)
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];