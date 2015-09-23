import React from 'react'
import cx from 'classnames'
import { uniqueId, camelCase } from 'lodash'
import shallowequal from 'shallowequal'
import createChainedFunction from '../../utils/createChainedFunction'
import KeyComponent from '../KeyComponent'
import Icon from '../Icon'

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
    reset: bool,
    className: string,
    onChange: func,
    onFocus: func,
    onBlur: func,
    onMouseEnter: func,
    onMouseLeave: func
  }
  static defaultProps = {
    border: 'none'
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
    this.setState({value: value})
  }
  _handleFocus = () => {
    if (!this.props.disabled) {
      this.setState({focused: true})
      this.bindGlobalShortcut('esc', this._handleReset)
    }
  }
  _handleBlur = () => {
    this.setState({focused: false})
    this.unbindShortcut('esc')
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
    const outline = this.props.border === 'outline'
    const underline = this.props.border === 'underline'
    const border = outline || underline
    const marginClass = this.props.margin || undefined
    const onChange = createChainedFunction(this._handleChange, this.props.onChange)
    const onFocus = createChainedFunction(this._handleFocus, this.props.onFocus)
    const onBlur = createChainedFunction(this._handleBlur, this.props.onBlur)
    const onMouseEnter = createChainedFunction(this._handleMouseEnter, this.props.onMouseEnter)
    const onMouseLeave = createChainedFunction(this._handleMouseLeave, this.props.onMouseLeave)
    let value = this.state.value
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
      {
        'h1&1/2': border,
        'pl1/4 bd2 bdrs1/4': outline,
        'bdb2': underline,
        'pr1/4': outline && !this.props.reset,
        'pr1': this.props.reset,
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
      <div className={marginClass}>
        <label className={labelClasses} htmlFor={this.inputId}>{this.props.label}</label>
        <div className='posr'>
          <input
            {...this.props}
            type={type}
            id={this.inputId}
            ref={this.inputId}
            value={value}
            aria-describedby={describeId}
            onChange={onChange}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClasses} />
          {reset}
        </div>
        {description}
      </div>
    )
  }

}

export default Input
