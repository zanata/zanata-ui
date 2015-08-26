import React from 'react'
import cx from 'classnames'

class Input extends React.Component {
  constructor () {
    super()
    this._handleFocus = this._handleFocus.bind(this)
    this._handleBlur = this._handleBlur.bind(this)
    this._handleMouseOver = this._handleMouseOver.bind(this)
    this.state = {
      focused: false,
      hover: false
    }
  }
  _handleFocus (event) {
    this.setState({focused: true})
  }
  _handleBlur (event) {
    this.setState({focused: false})
  }
  _handleMouseOver (event) {
    if (event.type === 'mouseenter') {
      this.setState({hover: true})
    } else {
      this.setState({hover: false})
    }
  }
  render () {
    let type = this.props.type || 'text'
    let classes = cx(
      'h1&1/2', 'bdrs1/4',
      this.props.className,
      {
        'bd': this.props.outline,
        'bd2': this.props.outline,
        'ph1/4': this.props.outline,
        'bdcsec30': !this.state.hover && !this.state.focused,
        'bdcsec50': this.state.hover && !this.state.focused,
        'bdcpri': this.state.focused
      }
    )
    return (
      <div>
        <label
          htmlFor={this.props.name}
          className='fwsb csec dn'>
          {this.props.label}
        </label>
        <input
          {...this.props}
          type={type}
          onMouseEnter={this._handleMouseOver}
          onMouseLeave={this._handleMouseOver}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          className={classes} />
      </div>
    )
  }

}

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  outline: React.PropTypes.boolean,
  className: React.PropTypes.string
}

export default Input
