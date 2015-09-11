import React from 'react'
import cx from 'classnames'
import Icon from '../Icon'

export default class Loader extends React.Component {
  static propTypes = {
    size: React.PropTypes.string,
    className: React.PropTypes.string
  }
  _sizeClasses (size) {
    switch (size) {
      case 'n1': return 'wsn1 hsn1'
      case '1': return 'ws1 hs1'
      case '2': return 'ws2 hs2'
      case '3': return 'ws3 hs3'
      case '4': return 'ws4 hs4'
      case '5': return 'ws5 hs5'
      case '6': return 'ws6 hs6'
      case '7': return 'ws7 hs7'
      case '8': return 'ws8 hs8'
      case '9': return 'ws9 hs9'
      case '10': return 'ws10 hs10'
      default: return 'ws0 hs0'
    }
  }
  render () {
    let classes = cx(
      'difx jcsb aic',
      this.props.className,
      this._sizeClasses(this.props.size)
    )
    let loaderStyle = {
      width: '27.8%',
      height: '27.8%'
    }
    return (
      <span {...this.props} className={classes}>
        <Icon name='dot' className='animdur900ms animici animtfeob animnbd' style={loaderStyle} />
        <Icon name='dot' className='animdur900ms animici animtfeob animnbd animdel150ms' style={loaderStyle} />
        <Icon name='dot' className='animdur900ms animici animtfeob animnbd animdel300ms' style={loaderStyle} />
      </span>
    )
  }
}
