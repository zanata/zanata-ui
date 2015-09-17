import React from 'react'
import cx from 'classnames'

export default class Icon extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.string,
    className: React.PropTypes.string
  }
  _sizeClasses (size) {
    switch (size) {
      case 'n2': return 'wsn2 hsn2'
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
    let svgIcon = `<use xlink:href="#Icon-${this.props.name}" />`
    let classes = cx(
      'dib posr',
      this.props.className,
      this._sizeClasses(this.props.size)
    )
    return (
      <span {...this.props} className={classes}>
        <svg dangerouslySetInnerHTML={{ __html: svgIcon }} className='posa a0' style={{ maxWidth: '100%', fill: 'currentColor' }} />
      </span>
    )
  }
}
