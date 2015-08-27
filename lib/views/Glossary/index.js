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

var _componentsSelectLibSelectJs = require('../../components/Select/lib/Select.js');

var _componentsSelectLibSelectJs2 = _interopRequireDefault(_componentsSelectLibSelectJs);

var _componentsInput = require('../../components/Input');

var _componentsInput2 = _interopRequireDefault(_componentsInput);

var _componentsIcon = require('../../components/Icon');

var _componentsIcon2 = _interopRequireDefault(_componentsIcon);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(val) {
      console.log(val);
    }
  }, {
    key: 'render',
    value: function render() {
      var languageList = [{ value: 'one', label: 'French' }, { value: 'two', label: 'Russian' }];
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: 'dfx aic mb1' },
          _react2['default'].createElement(
            'div',
            { className: 'fxauto dfx aic' },
            _react2['default'].createElement(
              'h1',
              { className: 'fz2 dib csec' },
              'System Glossary'
            ),
            _react2['default'].createElement(_componentsIcon2['default'], { name: 'chevron-right', className: 'mh1/2 csec50', size: 's1' }),
            _react2['default'].createElement(_componentsSelectLibSelectJs2['default'], {
              name: 'language-selection',
              value: '',
              className: 'w8',
              options: languageList,
              onChange: this._handleChange
            })
          ),
          _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
              'button',
              { className: 'cpri dfx aic' },
              _react2['default'].createElement(_componentsIcon2['default'], { name: 'import', className: 'mr1/4' }),
              _react2['default'].createElement(
                'span',
                null,
                'Import Glossary'
              )
            )
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'dfx aic mb1' },
          _react2['default'].createElement(
            'div',
            { className: 'fxauto' },
            _react2['default'].createElement(
              'div',
              { className: 'posr w8' },
              _react2['default'].createElement(_componentsInput2['default'], { label: 'Search Glossary', outline: true, className: 'w100p pr1&1/2', type: 'search', placeholder: 'Search Glossary' }),
              _react2['default'].createElement(
                'button',
                { className: 'posa r0 t0 fzn1 h1&1/2 p1/4 csec50 dfx aic' },
                _react2['default'].createElement(_componentsIcon2['default'], { name: 'search', size: 's1' })
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'dfx aic' },
            _react2['default'].createElement(_componentsIcon2['default'], { name: 'glossary', className: 'csec50 mr1/4' }),
            _react2['default'].createElement(
              'span',
              { className: 'csec' },
              '4'
            )
          )
        ),
        _react2['default'].createElement(
          'p',
          null,
          'Table goes here'
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];