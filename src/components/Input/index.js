import React from 'react'
import cx from 'classnames'
import { uniqueId, camelCase } from 'lodash'
import shallowequal from 'shallowequal'

class Input extends React.Component {
  constructor () {
    super()
    this._handleFocus = this._handleFocus.bind(this)
    this._handleBlur = this._handleBlur.bind(this)
    this._handleMouseEnter = this._handleMouseEnter.bind(this)
    this._handleMouseLeave = this._handleMouseLeave.bind(this)
    this.state = {
      focused: false,
      hover: false
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return !shallowequal(nextProps, this.props) || !shallowequal(nextState, this.state)
  }
  _handleFocus (event, cb) {
    if (!this.props.disabled) this.setState({focused: true})
    if (typeof this.props.onFocus === 'function') this.props.onFocus()
  }
  _handleBlur (event) {
    this.setState({focused: false})
    if (typeof this.props.onBlur === 'function') this.props.onBlur()
  }
  _handleMouseEnter (event) {
    if (!this.props.disabled) this.setState({hover: true})
    if (typeof this.props.onMouseEnter === 'function') this.props.onMouseEnter()
  }
  _handleMouseLeave (event) {
    this.setState({hover: false})
    if (typeof this.props.onMouseEnter === 'function') this.props.onMouseLeave()
  }
  render () {
    const type = this.props.type || 'text'
    const inputId = uniqueId(camelCase(this.props.label) + '_')
    const describeId = this.props.description ? uniqueId(camelCase(this.props.label) + '_d_') : undefined
    const inputStatusClass = this.props.status ? 'bdc' + this.props.status : undefined
    const textStatusClass = this.props.status ? 'c' + this.props.status : undefined
    let labelClasses = cx(
      'db fwsb csec pv1/4',
      textStatusClass,
      {
        'sronly': this.props.hideLabel
      }
    )
    let inputClasses = cx(
      'db bdrs1/4',
      this.props.className,
      inputStatusClass,
      {
        'bd bd2 h1&1/2 ph1/4': this.props.outline,
        'bdcsec30': !this.state.hover && !this.state.focused && this.props.outline,
        'bdcsec50': this.state.hover && !this.state.focused && this.props.outline,
        'op50': this.props.disabled,
        'bdcpri': this.state.focused && this.props.outline
      }
    )
    let descriptionClasses = cx(
      'mt1/4',
      textStatusClass,
      {
        'csec70': !this.props.status
      }
    )
    // Set as undefined if not available as '' would render an empty span
    const description = this.props.description ? (<p className={descriptionClasses} id={describeId}>{this.props.description}</p>) : undefined

    return (
      <div>
        <label className={labelClasses} htmlFor={inputId}>{this.props.label}</label>
        <input
          {...this.props}
          type={type}
          id={inputId}
          aria-describedby={describeId}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          className={inputClasses} />
        {description}
      </div>
    )
  }

}

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  type: React.PropTypes.string,
  status: React.PropTypes.string,
  outline: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  hideLabel: React.PropTypes.bool,
  className: React.PropTypes.string,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  onMouseEnter: React.PropTypes.func,
  onMouseLeave: React.PropTypes.func
}

export default Input
