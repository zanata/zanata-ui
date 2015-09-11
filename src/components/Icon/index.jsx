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
      case 'sn1': return 'wsn1 hsn1'
      case 's1': return 'ws1 hs1'
      case 's2': return 'ws2 hs2'
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
