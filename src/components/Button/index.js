import React, { PropTypes } from 'react'
import { mergeClasses, flattenClasses } from '../../utils/styleUtils'

const classes = {
  base: {
    whs: 'Whs(nw)',
    disabled: {
      cur: 'Cur(d):di',
      op: 'Op(.6):di',
      pe: 'Pe(n):di'
    }
  }
}

const Button = ({
  children,
  disabled,
  theme,
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  const stateClasses = flattenClasses({
    ...themed.base
  })
  return (
    <button
      disabled={disabled}
      className={stateClasses}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  theme: PropTypes.object
}

export default Button
