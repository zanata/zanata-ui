import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import Base from '../Base'

export const classes = {
  base: {
    whs: 'Whs(nw)',
    c: 'C(i)',
    o: 'O(n)',
    ap: 'Ap(n)',
    disabled: {
      cur: 'Cur(d):di',
      op: 'Op(.6):di',
      pe: 'Pe(n):di'
    }
  }
}

const Button = ({
  children,
  theme = {},
  ...props
}) => {
  const themed = merge({}, classes, theme)
  return (
    <Base
      componentName='Button'
      {...props}
      tagName='button'
      theme={themed}
    >
      {children}
    </Base>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  /**
   * Toggle whether the button is disabled or not. Default is 'false'
   */
  disabled: PropTypes.bool,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default Button
