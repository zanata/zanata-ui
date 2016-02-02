import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { uniqueId, camelCase } from 'lodash'
import shallowequal from 'shallowequal'
import createChainedFunction from '../../utils/createChainedFunction'
import KeyComponent from '../KeyComponent'
import Icon from '../Icon'
import Loader from '../Loader'
import Button from '../Button'

class Input extends KeyComponent {
  state = {
    focused: false,
    hover: false
  };
  inputId = this.props.id || uniqueId(camelCase(this.props.label) + '_');
  _handleFocus = () => {
    if (!this.props.disabled) {
      this.setState({focused: true})
      if (this.props.onReset) {
        this.bindGlobalShortcut('esc', this._handleReset)
      }
    }
  };
  _handleBlur = () => {
    this.setState({focused: false})
    if (this.props.onReset) {
      this.unbindShortcut('esc')
    }
  };
  _handleMouseEnter = () => {
    if (!this.props.disabled) {
      this.setState({hover: true})
    }
  };
  _handleMouseLeave = () => {
    this.setState({hover: false})
  };
  // Non Standard Events
  _handleReset = () => {
    this.props.onReset()
    ReactDOM.findDOMNode(this.refs[this.inputId]).focus()
  };
  shouldComponentUpdate (nextProps, nextState) {
    return !shallowequal(nextProps, this.props) || !shallowequal(nextState, this.state)
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
    const loading = this.props.loading
    const marginClass = this.props.margin || undefined
    const onFocus = createChainedFunction(this._handleFocus, this.props.onFocus)
    const onBlur = createChainedFunction(this._handleBlur, this.props.onBlur)
    const onMouseEnter = createChainedFunction(this._handleMouseEnter, this.props.onMouseEnter)
    const onMouseLeave = createChainedFunction(this._handleMouseLeave, this.props.onMouseLeave)
    const iconClasses = cx(
      'z1 posa l0 t0 h100p ph1/4 df aic jcc',
      {
        'csec': this.state.focused,
        'csec50': !this.state.focused
      }
    )
    const icon = this.props.icon ? (
      <span className={iconClasses} ><Icon name={this.props.icon} /></span>
    ) : undefined
    let labelClasses = cx(
      'db fwsb csec pv1/4',
      textStatusClass,
      {
        'sronly': this.props.hideLabel
      }
    )
    const inputClasses = cx(
      this.props.className,
      inputStatusClass,
      'w100p db',
      {
        'h1&1/2': border,
        'bd2 bdrs1/4': outline,
        'pl1/4': outline && !icon,
        'bdb2': underline,
        'pr1/4': outline && !showReset && !loading,
        'pr1': showReset || loading,
        'pl1': icon,
        'bdcsec30': !this.state.hover && !this.state.focused && border && !inputStatusClass,
        'bdcsec50': this.state.hover && !this.state.focused && border && !inputStatusClass,
        'op50': this.props.disabled,
        'bdcpri': this.state.focused && border && !inputStatusClass
      }
    )
    const descriptionClasses = cx(
      'mt1/4 op70',
      textStatusClass,
      {
        'csec': !this.props.status
      }
    )
    const resetClasses = cx(
      'z1 posa r0 t0 h100p'
    )
    const loaderClasses = cx(
      resetClasses,
      'csec df aic jcc w1 pr1/8'
    )
    // Set as undefined if not available as '' would render an empty span
    const description = this.props.description ? (
      <p className={descriptionClasses} id={describeId}>{this.props.description}</p>
    ) : undefined
    const resetButton = (showReset && this.props.value && !loading) ? (
      <Button padding='ph1/4' link kind='muted' className={resetClasses} onClick={this._handleReset}>
        <span className='sronly'>Reset</span><Icon name='cross' />
      </Button>
    ) : undefined
    const loader = loading ? (
      <span className={loaderClasses}>
        <Loader/>
      </span>
    ) : undefined
    return (
      <div className={marginClass}>
        <label className={labelClasses} htmlFor={this.inputId}>{this.props.label}</label>
        <div className='posr'>
          {icon}
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
          {loader}
        </div>
        {description}
      </div>
    )
  }

}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  status: PropTypes.string,
  icon: PropTypes.string,
  border: PropTypes.oneOf(['none', 'outline', 'underline']),
  disabled: PropTypes.bool,
  margin: PropTypes.string,
  hideLabel: PropTypes.bool,
  resetButton: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onReset: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}

Input.defaultProps = {
  border: 'none'
}

export default Input
