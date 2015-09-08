import React from 'react'
import cx from 'classnames'
import { uniqueId, camelCase } from 'lodash'
import shallowequal from 'shallowequal'
import KeyComponent from '../KeyComponent'
import Icon from '../Icon'

const PropTypes = React.PropTypes

class Input extends KeyComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    hideLabel: PropTypes.bool,
    reset: PropTypes.bool,
    className: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  }
  state = {
    focused: false,
    hover: false,
    value: this.props.value
  }
  inputId = this.props.id || uniqueId(camelCase(this.props.label) + '_')
  shouldComponentUpdate (nextProps, nextState) {
    return !shallowequal(nextProps, this.props) || !shallowequal(nextState, this.state)
  }
  _handleChange = (event) => {
    let value = event.target.value
    if (this.props.onChange)
      this.props.onChange(event)
    this.setState({value: value})
  }
  _handleFocus = (event) => {
    if (!this.props.disabled) {
      this.setState({focused: true})
      this.bindGlobalShortcut('esc', this._handleReset)
    }
    if (this.props.onFocus)
      this.props.onFocus(event)
  }
  _handleBlur = (event) => {
    this.setState({focused: false})
    this.unbindShortcut('esc')
    if (this.props.onBlur)
      this.props.onBlur(event)
  }
  _handleMouseEnter = (event) => {
    if (!this.props.disabled)
      this.setState({hover: true})
    if (this.props.onMouseEnter)
      this.props.onMouseEnter(event)
  }
  _handleMouseLeave = (event) => {
    this.setState({hover: false})
    if (this.props.onMouseEnter)
      this.props.onMouseLeave(event)
  }
  // Non Standard Events
  _handleReset = () => {
    if (this.props.reset && this.state.value) {
      this.setState({value: ''}, () => {
        React.findDOMNode(this.refs[this.inputId]).focus()
      })
    }
  }
  render () {
    const type = this.props.type || 'text'
    const describeId = this.props.description ? this.inputId + '_d' : undefined
    const inputStatusClass = this.props.status ? 'bdc' + this.props.status : undefined
    const textStatusClass = this.props.status ? 'c' + this.props.status : undefined
    let value = this.state.value
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
        'bd bd2 h1&1/2 pl1/4': this.props.outline,
        'pr1/4': this.props.outline && !this.props.reset,
        'pr1': this.props.reset,
        'bdcsec30': !this.state.hover && !this.state.focused && this.props.outline,
        'bdcsec50': this.state.hover && !this.state.focused && this.props.outline,
        'op50': this.props.disabled,
        'bdcpri': this.state.focused && this.props.outline,
      }
    )
    let descriptionClasses = cx(
      'mt1/4 op70',
      textStatusClass,
      {
        'csec': !this.props.status
      }
    )
    let resetClasses = cx(
      'z1 posa r0 t0 h100p ph1/4 csec50 aic',
      {
        'dn': !this.state.value,
        'dfx': this.state.value
      }
    )
    // Set as undefined if not available as '' would render an empty span
    const description = this.props.description ? (<p className={descriptionClasses} id={describeId}>{this.props.description}</p>) : undefined
    const reset = this.props.reset ? (<button className={resetClasses} onClick={this._handleReset}><span className='sronly'>Reset</span><Icon name='cross' /></button>) : undefined

    return (
      <div>
        <label className={labelClasses} htmlFor={this.inputId}>{this.props.label}</label>
        <div className='posr'>
          <input
            {...this.props}
            type={type}
            id={this.inputId}
            ref={this.inputId}
            value={value}
            aria-describedby={describeId}
            onChange={this._handleChange}
            onMouseEnter={this._handleMouseEnter}
            onMouseLeave={this._handleMouseLeave}
            onFocus={this._handleFocus}
            onBlur={this._handleBlur}
            className={inputClasses} />
          {reset}
        </div>
        {description}
      </div>
    )
  }

}

export default Input
