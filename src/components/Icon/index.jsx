import React, { PropTypes } from 'react'
import cx from 'classnames'

export default class Icon extends React.Component {
  _sizeClasses (size) {
    switch (size) {
      case 'n2': return 'W(msn2) H(msn2)'
      case 'n1': return 'W(msn1) H(msn1)'
      case '1': return 'W(ms1) H(ms1)'
      case '2': return 'W(ms2) H(ms2)'
      case '3': return 'W(ms3) H(ms3)'
      case '4': return 'W(ms4) H(ms4)'
      case '5': return 'W(ms5) H(ms5)'
      case '6': return 'W(ms6) H(ms6)'
      case '7': return 'W(ms7) H(ms7)'
      case '8': return 'W(ms8) H(ms8)'
      case '9': return 'W(ms9) H(ms9)'
      case '10': return 'W(ms10) H(ms10)'
      default: return 'W(ms0) H(ms0)'
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
        <svg dangerouslySetInnerHTML={{ __html: svgIcon }}
          className='StretchedBox Maw(100%)'
          style={{ fill: 'currentColor' }} />
      </span>
    )
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string
}
