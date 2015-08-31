'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesIndexCss = require('./styles/index.css');

var _stylesIndexCss2 = _interopRequireDefault(_stylesIndexCss);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _componentsIcons = require('./components/Icons');

var _componentsIcons2 = _interopRequireDefault(_componentsIcons);

var _componentsIcon = require('./components/Icon');

var _componentsIcon2 = _interopRequireDefault(_componentsIcon);

var _componentsStyles = require('./components/Styles');

var _componentsStyles2 = _interopRequireDefault(_componentsStyles);

var _componentsPatterns = require('./components/Patterns');

var _componentsPatterns2 = _interopRequireDefault(_componentsPatterns);

var _viewsGlossary = require('./views/Glossary');

var _viewsGlossary2 = _interopRequireDefault(_viewsGlossary);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  // declare our routes and their hierarchy

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Decode entities in the URL
      // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
      window.location.hash = window.decodeURIComponent(window.location.hash);
      var scrollToAnchor = function scrollToAnchor() {
        var hashParts = window.location.hash.split('#');
        if (hashParts.length > 2) {
          var hash = hashParts.slice(-1)[0];
          if (document.getElementById(hash)) {
            document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      scrollToAnchor();
      window.onhashchange = scrollToAnchor;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_componentsIcons2['default'], { fileName: 'components/Icons/icons.svg' }),
        _react2['default'].createElement(
          'nav',
          { className: 'posf t0 h2 w100p z4 bdb bdcsec20 bgcwhite dfx' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: 'styles', className: 'p1/2 h2 cpri' },
            'Styles'
          ),
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: 'patterns', className: 'p1/2 h2 cpri' },
            'Patterns'
          ),
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: 'glossary', className: 'p1/2 h2 cpri' },
            'Glossary'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'p1 posr t2' },
          _react2['default'].createElement(_reactRouter.RouteHandler, null)
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

var routes = _react2['default'].createElement(
  _reactRouter.Route,
  { name: 'app', path: '/', handler: App },
  _react2['default'].createElement(_reactRouter.DefaultRoute, { handler: _componentsStyles2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'styles', path: '/styles', handler: _componentsStyles2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'patterns', path: '/patterns', handler: _componentsPatterns2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { name: 'glossary', path: '/glossary', handler: _viewsGlossary2['default'] })
);

_reactRouter2['default'].run(routes, _reactRouter2['default'].HashLocation, function (Root) {
  _react2['default'].render(_react2['default'].createElement(Root, null), document.getElementById('app'));
});