import stampit from 'react-stampit'
import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Spring } from 'react-motion'
import interaction from '../../traits/interaction'
import Loader from '../Loader'

const classes = {
  default: 'posr ovh trsaeo',
  states: {
    disabled: 'curd op70'
  },
  button: {
    default: 'whsnw',
    states: {
      default: 'bxsh1',
      hover: 'bxsh2',
      focus: 'bxsh2',
      active: 'bxsh1'
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
        disabled: 'op0'
      }
    }
  },
  link: {
    states: {
      hover: 'cdarken20',
      focus: 'cdarken20',
      active: 'cdarken40'
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
    default: 'posr z1 difx aic jcsb h100p'
  },
  loader: {
    default: 'posa a0 dfx jcc aic z2'
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
      const disable = disabled || loading
      const interativeState = this.getState()
      let buttonClasses = cx(
        className,
        classes.default,
        classes.button.default,
        padding || classes.button.size[size],
        bdrs || classes.button.bdrs,
        classes.button.kind[kind],
        disable && classes.states.disabled,
        (interativeState === 'active') && classes.button.states.active,
        (interativeState === 'hovered') && classes.button.states.hover,
        (interativeState === 'focused') && classes.button.states.focus,
        (interativeState === 'default') && classes.button.states.default,
      )
      let linkClasses = cx(
        className,
        classes.default,
        classes.link.default,
        padding,
        disable && classes.disabled,
        classes.link.kind[kind],
        disable && classes.states.disabled,
        (interativeState === 'active') && classes.link.states.active,
        (interativeState === 'hovered') && classes.link.states.hover,
        (interativeState === 'focused') && classes.link.states.focus
      )
      let buttonInteractiveClasses = cx(
        classes.button.interactive.default,
        bdrs || classes.button.bdrs,
        disable && classes.button.interactive.states.disabled,
        (interativeState === 'active') && classes.button.interactive.states.active,
        (interativeState === 'hovered') && classes.button.interactive.states.hover,
        (interativeState === 'focused') && classes.button.interactive.states.focus,
        (interativeState === 'default') && classes.button.interactive.states.default,
      )
      const buttonInteractive = !link ? (
        <span className={buttonInteractiveClasses}></span>
      ) : null
      const springConfig = [290, 17]
      const buttonChild = (
        <Spring defaultValue={{val: 0}} endValue={{val: loading ? -150 : 0, config: springConfig}}>
          {interpolated =>
            <span className={classes.child.default} style={{
              transform: `translateY(${interpolated.val}%)`,
              marginTop: (size === -1) && 1
            }}>
              {children}
            </span>
          }
        </Spring>
      )
      const buttonLoaderSize = loading ? parseInt(size, 10) + 4 : null
      const buttonLoader = (
        <Spring defaultValue={{val: 150}} endValue={{val: loading ? 0 : 150, config: springConfig}}>
          {interpolated =>
            <span className={classes.loader.default} style={{transform: `translateY(${interpolated.val}%)`}}>
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
