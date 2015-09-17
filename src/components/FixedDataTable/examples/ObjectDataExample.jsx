'use strict'

var ROWS = 1000000

import React from 'react'
import FakeObjectDataListStore from './FakeObjectDataListStore'
import { Table, Column } from '../index.js'

const PropTypes = React.PropTypes

class ObjectDataExample extends React.Component {
  static propTypes = {
    onContentDimensionsChange: PropTypes.func,
    left: PropTypes.number,
    top: PropTypes.number
  }
  state = {
    selected: [],
    dataList: new FakeObjectDataListStore(ROWS),
    tableWidth: window.innerWidth - 48,
    tableHeight: window.innerHeight - 200
  }
  componentDidMount () {
    this._update()
    var win = window
    if (win.addEventListener) {
      win.addEventListener('resize', this._onResize, false)
    } else if (win.attachEvent) {
      win.attachEvent('onresize', this._onResize)
    } else {
      win.onresize = this._onResize
    }
  }
  _rowGetter = (index) => {
    return this.state.dataList.getObjectAt(index)
  }
  _onContentHeightChange = (contentHeight) => {
    this.props.onContentDimensionsChange &&
    this.props.onContentDimensionsChange(contentHeight, 1150)
  }
  _onResize = () => {
    clearTimeout(this._updateTimer)
    this._updateTimer = setTimeout(this._update, 16)
  }
  _update = () => {
    var win = window
    this.setState({
      tableWidth: win.innerWidth - 48,
      tableHeight: win.innerHeight - 200
    })
  }
  _renderHeader = (label, cellDataKey, columnData, rowData, width) => {
    return (
      <div className='p1/4'>{label}</div>
    )
  }
  _renderCell = (cellData, cellDataKey, rowData, rowIndex, columnData, width) => {
    return (
      <div className='p1/4'><input type='text' defaultValue={cellData} /></div>
    )
  }
  _onRowClick = (e, index) => {
    var dataList = this.state.dataList.slice()
    var row = dataList._cache[index]
    row.selected = !row.selected
    dataList._cache[index] = row
    this.setState({
      dataList: dataList
    })
  }
  _onRowSelect = (e, index, value, data) => {
    var newSet = this.state.selected
    if (newSet.indexOf(value) < 0) { // does not exist in list
      newSet.push(value)
    } else {
      newSet.splice(newSet.indexOf(value), 1)
    }
    this.setState({
      selected: newSet
    })
  }
  render () {
    var controlledScrolling =
    this.props.left !== undefined || this.props.top !== undefined
    return (
      <Table
        rowHeight={48}
        headerHeight={48}
        rowGetter={this._rowGetter}
        rowsCount={this.state.dataList.getSize()}
        onRowClick={this._onRowSelect}
        width={this.state.tableWidth}
        height={this.state.tableHeight}
        onContentHeightChange={this._onContentHeightChange}
        scrollTop={this.props.top}
        scrollLeft={this.props.left}
        overflowX={controlledScrolling ? 'hidden' : 'auto'}
        overflowY={controlledScrolling ? 'hidden' : 'auto'}>
        <Column
          dataKey='firstName'
          fixed={true}
          label='First Name'
          width={100}
          flexGrow={1}
          headerRenderer={this._renderHeader}
          cellRenderer={this._renderCell}
          />
        <Column
          dataKey='lastName'
          fixed={true}
          label='Last Name'
          width={100}
          flexGrow={1}
          headerRenderer={this._renderHeader}
          cellRenderer={this._renderCell}
          />
        <Column
          dataKey='city'
          label='City'
          width={100}
          flexGrow={1}
          headerRenderer={this._renderHeader}
          cellRenderer={this._renderCell}
          />
        <Column
          label='Street'
          width={200}
          dataKey='street'
          flexGrow={1}
          headerRenderer={this._renderHeader}
          cellRenderer={this._renderCell}
          />
      </Table>
    )
  }
}

export default ObjectDataExample
