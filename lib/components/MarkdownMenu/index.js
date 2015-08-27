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

var _reactRouter = require('react-router');

var _marked = require('marked');

var MarkdownMenu = (function (_React$Component) {
  _inherits(MarkdownMenu, _React$Component);

  function MarkdownMenu() {
    _classCallCheck(this, MarkdownMenu);

    _get(Object.getPrototypeOf(MarkdownMenu.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MarkdownMenu, [{
    key: 'render',
    value: function render() {
      var parsedMarkdown = (0, _marked.lexer)(this.props.markdown);
      var menu = [];
      var menuNum = 0;

      parsedMarkdown.forEach(function (rule) {
        if (rule.type === 'heading') {
          if (rule.depth === 2) {
            menu[menuNum] = {
              title: rule.text,
              sections: []
            };
            menuNum++;
          } else if (rule.depth === 3) {
            menu[menuNum - 1].sections.push({
              title: rule.text
            });
          }
        }
      });

      return _react2['default'].createElement(
        'nav',
        null,
        _react2['default'].createElement(
          'ul',
          null,
          menu.map(function (item, i) {
            return _react2['default'].createElement(
              'li',
              { key: i },
              _react2['default'].createElement(
                _reactRouter.Link,
                { className: 'fz1 fwsb', to: '/styles#' + escapeText(item.title) },
                item.title
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'mb1/2' },
                item.sections.map(function (section, sectionKey) {
                  return _react2['default'].createElement(
                    'li',
                    { key: sectionKey },
                    _react2['default'].createElement(
                      _reactRouter.Link,
                      { to: '/styles#' + escapeText(section.title) },
                      section.title
                    )
                  );
                })
              )
            );
          })
        )
      );
    }
  }]);

  return MarkdownMenu;
})(_react2['default'].Component);

MarkdownMenu.propTypes = {
  markdown: _react2['default'].PropTypes.string
};

function escapeText(text) {
  return text.toLowerCase().replace(/[^\w]+/g, '-');
}

exports['default'] = MarkdownMenu;
module.exports = exports['default'];