import React from 'react'
import cx from 'classnames'
import { uniqueId, camelCase } from 'lodash'
import shallowequal from 'shallowequal'
import createChainedFunction from '../../utils/createChainedFunction'
import KeyComponent from '../KeyComponent'
import Icon from '../Icon'
import Button from '../Button'

const { string, func, bool, oneOf } = React.PropTypes

class Input extends KeyComponent {
  static propTypes = {
    label: string.isRequired,
    placeholder: string.isRequired,
    description: string,
    type: string,
    value: string,
    id: string,
    status: string,
    border: oneOf(['none', 'outline', 'underline']),
    disabled: bool,
    margin: string,
    hideLabel: bool,
    resetButton: bool,
    className: string,
    onChange: func,
    onFocus: func,
    onBlur: func,
    onReset: func,
    onMouseEnter: func,
    onMouseLeave: func
  }
  static defaultProps = {
    border: 'none'
  }
  state = {
    focused: false,
    hover: false
  }
  inputId = this.props.id || uniqueId(camelCase(this.props.label) + '_')
  shouldComponentUpdate (nextProps, nextState) {
    return !shallowequal(nextProps, this.props) || !shallowequal(nextState, this.state)
  }
  _handleFocus = () => {
    if (!this.props.disabled) {
      this.setState({focused: true})
      if (this.props.onReset) {
        this.bindGlobalShortcut('esc', this._handleReset)
      }
    }
  }
  _handleBlur = () => {
    this.setState({focused: false})
    if (this.props.onReset) {
      this.unbindShortcut('esc')
    }
  }
  _handleMouseEnter = () => {
    if (!this.props.disabled) {
      this.setState({hover: true})
    }
  }
  _handleMouseLeave = () => {
    this.setState({hover: false})
  }
  // Non Standard Events
  _handleReset = () => {
    this.props.onReset()
    React.findDOMNode(this.refs[this.inputId]).focus()
  }
  render () {
    const type = this.props.type || 'text'
    const showReset = this.props.onReset && this.props.resetButton
    const describeId = this.props.description ? this.inputId + '_d' : undefined
    const inputStatusClass = this.props.status ? 'bdc' + this.props.status : undefined
    const textStatusClass = this.props.status ? 'c' + this.props.status : undefined
    const outline = this.props.border === 'outline'
    const underline = this.props.border === 'underline'
    const border = outline || underline
    const marginClass = this.props.margin || undefined
    const onFocus = createChainedFunction(this._handleFocus, this.props.onFocus)
    const onBlur = createChainedFunction(this._handleBlur, this.props.onBlur)
    const onMouseEnter = createChainedFunction(this._handleMouseEnter, this.props.onMouseEnter)
    const onMouseLeave = createChainedFunction(this._handleMouseLeave, this.props.onMouseLeave)
    let labelClasses = cx(
      'db fwsb csec pv1/4',
      textStatusClass,
      {
        'sronly': this.props.hideLabel
      }
    )
    let inputClasses = cx(
      this.props.className,
      inputStatusClass,
      'w100p db',
      {
        'h1&1/2': border,
        'pl1/4 bd2 bdrs1/4': outline,
        'bdb2': underline,
        'pr1/4': outline && !showReset,
        'pr1': showReset,
        'bdcsec30': !this.state.hover && !this.state.focused && border && !inputStatusClass,
        'bdcsec50': this.state.hover && !this.state.focused && border && !inputStatusClass,
        'op50': this.props.disabled,
        'bdcpri': this.state.focused && border && !inputStatusClass
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
      'z1 posa r0 t0 h100p'
    )
    // Set as undefined if not available as '' would render an empty span
    const description = this.props.description ? (
      <p className={descriptionClasses} id={describeId}>{this.props.description}</p>
    ) : undefined
    const resetButton = (showReset && this.props.value) ? (
      <Button padding='ph1/4' link kind='muted' className={resetClasses} onClick={this._handleReset}>
        <span className='sronly'>Reset</span><Icon name='cross' />
      </Button>
    ) : undefined
    return (
      <div className={marginClass}>
        <label className={labelClasses} htmlFor={this.inputId}>{this.props.label}</label>
        <div className='posr'>
          <input
            {...this.props}
            type={type}
            id={this.inputId}
            ref={this.inputId}
            aria-describedby={describeId}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClasses} />
          {resetButton}
        </div>
        {description}
      </div>
    )
  }

}

export default Input
