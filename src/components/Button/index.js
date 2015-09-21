import stampit from 'react-stampit'
import React, { PropTypes } from 'react'
import cx from 'classnames'
import { Spring } from 'react-motion'
import interaction from '../../traits/interaction'
import Loader from '../Loader'

const ButtonFactory = React => {
  const { string, node, bool, number, oneOf } = PropTypes
  const kindsClasses = {
    link: 'cpri',
    default: 'bgcwhite50a cpri bd bdcblack10a',
    primary: 'cwhite bgcpri',
    success: 'cwhite bgcsuccess',
    unsure: 'cblack70a bgcunsure',
    warning: 'cwhite bgcwarning',
    danger: 'cwhite bgcdanger'
  }
  return stampit(React, {
    propTypes: {
      children: node,
      disabled: bool,
      padding: string,
      size: number,
      kind: oneOf(Object.keys(kindsClasses)),
      className: string,
      loading: bool,
      bdrs: string
    },
    defaultProps: {
      kind: 'link',
      size: 0
    },
    render () {
      const {
        children,
        className,
        kind,
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
      const sizeClasses = (kind) => {
        if (kind === 'link') return (padding || null)
        switch (parseInt(size, 10)) {
          case -1: return 'fzn1 ' + (padding || 'ph1/2 pv1/8')
          case 0: return (padding || 'fz0 pv1/4 ph3/4')
          case 1: return 'fz2 ' + (padding || 'pv1/4 ph3/4')
          case 2: return 'fz4 ' + (padding || 'pv1/4 ph1')
          default: return (padding || 'fz0 pv1/4 ph3/4')
        }
      }
      const disable = disabled || loading
      let buttonClasses = cx(
        'posr ovh trsaeo',
        className,
        sizeClasses(kind),
        bdrs || 'bdrs',
        kindsClasses[kind],
        {
          'whsnw difx aic jcsb': kind !== 'link',
          'curd': disable,
          'bxsh1': ((!hovered && !focused) || active) && (kind !== 'link') && !disable,
          'csec': active && (kind === 'link') && !disable,
          'bxsh2': (hovered || focused) && !active && (kind !== 'link') && !disable,
          'op70': (hovered || focused) && !active && (kind === 'link') && !disable
        }
      )
      let buttonInteractiveClasses = cx(
        'posa a0',
        bdrs || 'bdrs',
        {
          'bgclighten20': (kind !== 'link') && !disable,
          'bgclighten40': disable,
          'op0': !hovered && !focused && !active && (kind !== 'link') && !disable
        }
      )
      const buttonChildClasses = cx(
        'posr z1'
      )
      const springConfig = [290, 17]
      const buttonChild = (
        <Spring defaultValue={{val: 0}} endValue={{val: loading ? -150 : 0, config: springConfig}}>
          {interpolated =>
            <span className={buttonChildClasses} style={{transform: `translateY(${interpolated.val}%)`}}>
              {children}
            </span>
          }
        </Spring>
      )
      const buttonLoaderClasses = cx(
        'posa a0 dfx jcc aic z2'
      )
      const buttonLoaderSize = loading ? parseInt(size, 10) + 4 : null
      const buttonLoader = (
        <Spring defaultValue={{val: 150}} endValue={{val: loading ? 0 : 150, config: springConfig}}>
          {interpolated =>
            <span className={buttonLoaderClasses} style={{transform: `translateY(${interpolated.val}%)`}}>
              <Loader size={buttonLoaderSize} />
            </span>
          }
        </Spring>
      )
      return (
        <button {...props} className={buttonClasses} disabled={disabled || loading}>
          <span className={buttonInteractiveClasses} />
          {buttonChild}
          {buttonLoader}
        </button>
      )
    }
  })
}

export default ButtonFactory(React).compose(interaction)
