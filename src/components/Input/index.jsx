import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { uniqueId, camelCase } from 'lodash'
import shallowequal from 'shallowequal'
import createChainedFunction from '../../utils/createChainedFunction'
import { mergeClasses, flattenClasses } from '../../utils/styleUtils'
import KeyboardShortcuts from '../KeyboardShortcuts'
import Icon from '../Icon'
import Loader from '../Loader'
import ButtonLink from '../ButtonLink'

const resetTheme = {
  base: {
    end: 'End(0)',
    h: 'H(100%)',
    pos: 'Pos(a)',
    t: 'T(0)',
    w: 'W(r1h)',
    z: 'Z(1)'
  }
}
const loaderTheme = mergeClasses(
  resetTheme,
  {
    base: {
      ai: 'Ai(c)',
      c: 'C(dark)',
      d: 'D(f)',
      jc: 'Jc(c)',
      p: 'Pend(re)'
    }
  }
)

class Input extends Component {
  state = {
    focused: false,
    hover: false
  };
  inputId = this.props.id || uniqueId(camelCase(this.props.label) + '_');
  _handleFocus = () => {
    if (!this.props.disabled) {
      this.setState({focused: true})
      if (this.props.onReset) {
        this.props.bindGlobalShortcut('esc', this._handleReset)
      }
    }
  };
  _handleBlur = () => {
    this.setState({focused: false})
    if (this.props.onReset) {
      this.props.unbindShortcut('esc')
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
    return !shallowequal(nextProps, this.props) ||
      !shallowequal(nextState, this.state)
  }
  render () {
    const type = this.props.type || 'text'
    const showReset = this.props.onReset && this.props.resetButton
    const describeId = this.props.description ? this.inputId + '_d' : undefined
    const inputStatusClass = this.props.status
      ? 'bdc' + this.props.status : undefined
    const textStatusClass = this.props.status
      ? 'c' + this.props.status : undefined
    const outline = this.props.border === 'outline'
    const underline = this.props.border === 'underline'
    const border = outline || underline
    const loading = this.props.loading
    const marginClass = this.props.margin || undefined
    const onFocus = createChainedFunction(this._handleFocus, this.props.onFocus)
    const onBlur = createChainedFunction(this._handleBlur, this.props.onBlur)
    const onMouseEnter =
      createChainedFunction(this._handleMouseEnter, this.props.onMouseEnter)
    const onMouseLeave =
      createChainedFunction(this._handleMouseLeave, this.props.onMouseLeave)
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
        'pr1&1/2': showReset || loading,
        'pl1': icon,
        'bdcsec30': !this.state.hover && !this.state.focused &&
          border && !inputStatusClass,
        'bdcsec50': this.state.hover && !this.state.focused &&
          border && !inputStatusClass,
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
    // Set as undefined if not available as '' would render an empty span
    const description = this.props.description ? (
      <p className={descriptionClasses} id={describeId}>
        {this.props.description}
      </p>
    ) : undefined
    const resetButton = (showReset && this.props.value && !loading) ? (
      <ButtonLink
        type='muted'
        theme={resetTheme}
        onClick={this._handleReset}>
        <span className='sronly'>Reset</span><Icon name='cross' />
      </ButtonLink>
    ) : undefined
    const loader = loading ? (
      <span className={flattenClasses(loaderTheme)}>
        <Loader/>
      </span>
    ) : undefined
    return (
      <div className={marginClass}>
        <label className={labelClasses}
          htmlFor={this.inputId}>{this.props.label}</label>
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

export default KeyboardShortcuts(Input)
