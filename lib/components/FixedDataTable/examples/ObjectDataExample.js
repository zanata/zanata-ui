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

var _FakeObjectDataListStore = require('./FakeObjectDataListStore');

var _FakeObjectDataListStore2 = _interopRequireDefault(_FakeObjectDataListStore);

var _indexJs = require('../index.js');

var ROWS = 1000000;

var PropTypes = _react2['default'].PropTypes;

var ObjectDataExample = (function (_React$Component) {
  _inherits(ObjectDataExample, _React$Component);

  function ObjectDataExample() {
    var _this = this;

    _classCallCheck(this, ObjectDataExample);

    _get(Object.getPrototypeOf(ObjectDataExample.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      selected: [],
      dataList: new _FakeObjectDataListStore2['default'](ROWS),
      tableWidth: window.innerWidth - 48,
      tableHeight: window.innerHeight - 200
    };

    this._rowGetter = function (index) {
      return _this.state.dataList.getObjectAt(index);
    };

    this._onContentHeightChange = function (contentHeight) {
      _this.props.onContentDimensionsChange && _this.props.onContentDimensionsChange(contentHeight, 1150);
    };

    this._onResize = function () {
      clearTimeout(_this._updateTimer);
      _this._updateTimer = setTimeout(_this._update, 16);
    };

    this._update = function () {
      var win = window;
      _this.setState({
        tableWidth: win.innerWidth - 48,
        tableHeight: win.innerHeight - 200
      });
    };

    this._renderHeader = function (label, cellDataKey, columnData, rowData, width) {
      return _react2['default'].createElement(
        'div',
        { className: 'p1/4' },
        label
      );
    };

    this._renderCell = function (cellData, cellDataKey, rowData, rowIndex, columnData, width) {
      return _react2['default'].createElement(
        'div',
        { className: 'p1/4' },
        cellData
      );
    };

    this._onRowClick = function (e, index) {
      var dataList = _this.state.dataList.slice();
      var row = dataList._cache[index];
      row.selected = !row.selected;
      dataList._cache[index] = row;
      _this.setState({
        dataList: dataList
      });
    };

    this._onRowSelect = function (e, index, value, data) {
      var newSet = _this.state.selected;
      if (newSet.indexOf(value) < 0) {
        // does not exist in list
        newSet.push(value);
      } else {
        newSet.splice(newSet.indexOf(value), 1);
      }
      _this.setState({
        selected: newSet
      });
    };
  }

  _createClass(ObjectDataExample, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._update();
      var win = window;
      if (win.addEventListener) {
        win.addEventListener('resize', this._onResize, false);
      } else if (win.attachEvent) {
        win.attachEvent('onresize', this._onResize);
      } else {
        win.onresize = this._onResize;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var controlledScrolling = this.props.left !== undefined || this.props.top !== undefined;
      return _react2['default'].createElement(
        _indexJs.Table,
        {
          rowHeight: 48,
          headerHeight: 48,
          rowGetter: this._rowGetter,
          rowsCount: this.state.dataList.getSize(),
          onRowClick: this._onRowSelect,
          width: this.state.tableWidth,
          height: this.state.tableHeight,
          onContentHeightChange: this._onContentHeightChange,
          scrollTop: this.props.top,
          scrollLeft: this.props.left,
          overflowX: controlledScrolling ? 'hidden' : 'auto',
          overflowY: controlledScrolling ? 'hidden' : 'auto' },
        _react2['default'].createElement(_indexJs.Column, {
          dataKey: 'firstName',
          fixed: true,
          label: 'First Name',
          width: 100,
          flexGrow: 1,
          headerRenderer: this._renderHeader,
          cellRenderer: this._renderCell
        }),
        _react2['default'].createElement(_indexJs.Column, {
          dataKey: 'lastName',
          fixed: true,
          label: 'Last Name',
          width: 100,
          flexGrow: 1,
          headerRenderer: this._renderHeader,
          cellRenderer: this._renderCell
        }),
        _react2['default'].createElement(_indexJs.Column, {
          dataKey: 'city',
          label: 'City',
          width: 100,
          flexGrow: 1,
          headerRenderer: this._renderHeader,
          cellRenderer: this._renderCell
        }),
        _react2['default'].createElement(_indexJs.Column, {
          label: 'Street',
          width: 200,
          dataKey: 'street',
          flexGrow: 1,
          headerRenderer: this._renderHeader,
          cellRenderer: this._renderCell
        })
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      onContentDimensionsChange: PropTypes.func,
      left: PropTypes.number,
      top: PropTypes.number
    },
    enumerable: true
  }]);

  return ObjectDataExample;
})(_react2['default'].Component);

exports['default'] = ObjectDataExample;
module.exports = exports['default'];