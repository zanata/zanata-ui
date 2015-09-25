import stampit from 'react-stampit'
import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Spring } from 'react-motion'
import interaction from '../../traits/interaction'
import Loader from '../Loader'

const classes = {
  default: 'posr ovh trsaeo',
  states: {
    disabled: 'curd'
  },
  button: {
    default: 'whsnw difx aic',
    states: {
      default: 'bxsh1',
      hover: 'bxsh2',
      focus: 'bxsh2',
      active: 'bxsh1',
      disabled: ''
    },
    bdrs: 'bdrs',
    size: {
      '-1': 'fzn1 ph1/2 h1',
      '0': 'fz0 h1&1/2 ph3/4',
      '1': 'fz1 h2 ph3/4',
      '2': 'fz2 h2&1/2 ph1'
    },
    kind: {
      default: 'bgcwhite50a cpri bd bdcblack10a',
      muted: 'bgcsec30 cpri bd bdcblack10a',
      primary: 'cwhite bgcpri',
      success: 'cwhite bgcsuccess',
      unsure: 'cblack70a bgcunsure',
      warning: 'cwhite bgcwarning',
      danger: 'cwhite bgcdanger'
    },
    interactive: {
      default: 'posa a0',
      states: {
        default: 'op0',
        hover: 'bgclighten20',
        focus: 'bgclighten20',
        active: 'op0',
        disabled: 'bgclighten40 z3'
      }
    }
  },
  link: {
    default: 'difx aic',
    states: {
      hover: 'cdarken20',
      focus: 'cdarken20',
      active: 'cdarken40',
      disabled: 'op70'
    },
    kind: {
      default: 'cpri',
      muted: 'csec30',
      primary: 'cpri',
      success: 'csuccess',
      unsure: 'cunsure',
      warning: 'cwarning',
      danger: 'cdanger'
    }
  },
  child: {
    default: 'posr z1 difx aic jcsb'
  },
  loader: {
    default: 'posa a0 dfx jcc aic z2 op0'
  }
}

const ButtonFactory = React => {
  const { string, node, bool, number, oneOf } = PropTypes
  return stampit(React, {
    propTypes: {
      children: node,
      disabled: bool,
      padding: string,
      size: number,
      link: bool,
      kind: oneOf(Object.keys(classes.button.kind)),
      className: string,
      loading: bool,
      bdrs: string
    },
    defaultProps: {
      kind: 'default',
      size: 0
    },
    render () {
      const {
        children,
        className,
        kind,
        link,
        disabled,
        size,
        loading,
        bdrs,
        padding,
        ...props
      } = this.props
      const {
        hovered,
        focused,
        active,
        ...state
      } = this.state
      const is = this.getState(loading)
      let buttonClasses = cx(
        className,
        classes.default,
        classes.button.default,
        padding || classes.button.size[size],
        bdrs || classes.button.bdrs,
        classes.button.kind[kind],
        is.disabled && classes.states.disabled,
        is.disabled && classes.button.states.disabled,
        is.active && classes.button.states.active,
        is.hovered && classes.button.states.hover,
        is.focused && classes.button.states.focus,
        is.default && classes.button.states.default,
      )
      let linkClasses = cx(
        className,
        classes.default,
        classes.link.default,
        padding,
        classes.link.kind[kind],
        is.disabled && classes.states.disabled,
        is.disabled && classes.link.states.disabled,
        is.active && classes.link.states.active,
        is.hovered && classes.link.states.hover,
        is.focused && classes.link.states.focus
      )
      let buttonInteractiveClasses = cx(
        classes.button.interactive.default,
        bdrs || classes.button.bdrs,
        is.disabled && classes.button.interactive.states.disabled,
        is.active && classes.button.interactive.states.active,
        is.hovered && classes.button.interactive.states.hover,
        is.focused && classes.button.interactive.states.focus,
        is.default && classes.button.interactive.states.default,
      )
      const buttonInteractive = link ? null : (
        <span className={buttonInteractiveClasses}></span>
      )
      const springConfig = [290, 17]
      const buttonChild = (
        <Spring defaultValue={{val: 0}} endValue={{val: loading ? -150 : 0, config: springConfig}}>
          {interpolated =>
            <span className={classes.child.default} style={{
              transform: `translateY(${interpolated.val}%)`,
              WebkitTransform: `translateY(${interpolated.val}%)`,
              marginTop: (size === -1) && 1
            }}>
              {children}
            </span>
          }
        </Spring>
      )
      const buttonLoaderSize = parseInt(size, 10) + 4
      const buttonLoader = (
        <Spring defaultValue={{val: 150}} endValue={{val: loading ? 0 : 150, config: springConfig}}>
          {interpolated =>
            <span className={classes.loader.default}
                  style={{
                    transform: `translateY(${interpolated.val}%)`,
                    WebkitTransform: `translateY(${interpolated.val}%)`,
                    opacity: 1
                  }}>
              <Loader size={buttonLoaderSize} />
            </span>
          }
        </Spring>
      )
      return (
        <button {...props} className={link ? linkClasses : buttonClasses} disabled={disabled || loading}>
          {buttonInteractive}
          {buttonChild}
          {buttonLoader}
        </button>
      )
    }
  })
}

export default ButtonFactory(React).compose(interaction)
