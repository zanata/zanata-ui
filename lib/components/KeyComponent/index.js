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

var _combokeys = require('combokeys');

var _combokeys2 = _interopRequireDefault(_combokeys);

var _combokeysPluginsGlobalBind = require('combokeys/plugins/global-bind');

var _combokeysPluginsGlobalBind2 = _interopRequireDefault(_combokeysPluginsGlobalBind);

var _combokeysPluginsBindDictionary = require('combokeys/plugins/bind-dictionary');

var _combokeysPluginsBindDictionary2 = _interopRequireDefault(_combokeysPluginsBindDictionary);

var combokeys = new _combokeys2['default'](document);
combokeys = (0, _combokeysPluginsBindDictionary2['default'])((0, _combokeysPluginsGlobalBind2['default'])(combokeys));

var KeyComponent = (function (_React$Component) {
  _inherits(KeyComponent, _React$Component);

  function KeyComponent() {
    var _this = this;

    _classCallCheck(this, KeyComponent);

    _get(Object.getPrototypeOf(KeyComponent.prototype), 'constructor', this).apply(this, arguments);

    this.keyboardBindings = [];

    this.bindShortcut = function (key, callback) {
      combokeys.bind(key, callback);
      _this.keyboardBindings.push(key);
    };

    this.bindGlobalShortcut = function (key, callback) {
      combokeys.bindGlobal(key, callback);
      _this.keyboardBindings.push(key);
    };

    this.unbindShortcut = function (key) {
      var index = _this.keyboardBindings.indexOf(key);
      if (index !== -1) {
        _this.keyboardBindings.splice(index, 1);
      }
      combokeys.unbind(key);
    };

    this.unbindAllShortcuts = function () {
      if (_this.keyboardBindings.length < 1) {
        return;
      }
      _this.keyboardBindings.forEach(function (binding) {
        combokeys.unbind(binding);
      });
    };
  }

  _createClass(KeyComponent, [{
    key: 'componentWillUnmount',

    /**
     * Handle component unmount
     */
    value: function componentWillUnmount() {
      // Remove any keyboard bindings before unmounting
      this.unbindAllShortcuts();
    }
  }]);

  return KeyComponent;
})(_react2['default'].Component);

exports['default'] = KeyComponent;
module.exports = exports['default'];

// Array for keeping track of shortcuts bindings

/**
 * Bind a function to a keyboard shortcut
 *
 * @param key
 * @param callback
 */

/**
* Bind a function to a keyboard shortcut, even inside an input field
*
* @param key
* @param callback
*/

/**
 * Unbind a keyboard shortcut
 *
 * @param key
 */

/**
 * Remove any keyboard bindings
 */