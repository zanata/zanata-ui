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

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var renderer = new _marked2['default'].Renderer();

var MarkdownContent = (function (_React$Component) {
  _inherits(MarkdownContent, _React$Component);

  function MarkdownContent() {
    _classCallCheck(this, MarkdownContent);

    _get(Object.getPrototypeOf(MarkdownContent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MarkdownContent, [{
    key: 'render',
    value: function render() {
      renderer.heading = function (text, level) {
        return '<h' + level + ' class="' + headingClass(level) + '" id="' + escapeText(text) + '">' + text + '</h' + level + '>';
      };

      renderer.paragraph = function (text) {
        return '<p class="mb1">' + text + '</p>';
      };

      renderer.hr = function () {
        return '<hr>\n';
      };

      renderer.list = function (body, ordered) {
        var type = ordered ? 'ol' : 'ul';
        return '<' + type + ' class="mb1">\n' + body + '</' + type + '>\n';
      };

      renderer.listitem = function (text) {
        return '<li class="listd">' + text + '</li>\n';
      };

      renderer.code = function (code, lang, escaped) {
        // escaped = true
        if (!lang) {
          return '<pre class="mv1"><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
        } else if (lang === 'example') {
          return '<h4 class="csec50 mt1/2">Example</h4>\n                <div class="mb2 bd bdcsec30">\n                  <div class="p1">\n                    <div>' + code + '</div>\n                  </div>\n                  <pre class="p1/2 bdt bdcsec30 bgcsec10 fzn1"><code class="' + this.options.langPrefix + escape(lang, true) + '">' + escape(code, true) + '\n</code></pre>\n\n                </div>';
        } else {
          return '<pre class="mv1"><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
        }
      };

      var self = this;
      function renderedMarkdown() {
        return { __html: (0, _marked2['default'])(self.props.markdown, { renderer: renderer }) };
      }
      return _react2['default'].createElement('div', { dangerouslySetInnerHTML: renderedMarkdown() });
    }
  }]);

  return MarkdownContent;
})(_react2['default'].Component);

MarkdownContent.propTypes = {
  markdown: _react2['default'].PropTypes.string
};

function escapeText(text) {
  return text.toLowerCase().replace(/[^\w]+/g, '-');
}

function escape(html, encode) {
  return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function headingClass(level) {
  switch (level) {
    case 1:
      return 'fz5 fwl csec';
    case 2:
      return 'fz4 fwb csec mt2';
    case 3:
      return 'fz4 fwl csec mt2';
    case 4:
      return 'fz3 fwsb csec mt1&1/2';
    case 5:
      return 'fz2 csec mt1&1/2';
    case 6:
      return 'fz1 fwsb mt1/2';
    default:
      return '';
  }
}

exports['default'] = MarkdownContent;
module.exports = exports['default'];