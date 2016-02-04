import React, { PropTypes } from 'react'
import warning from 'warning'
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
  className,
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  const stateClasses = flattenClasses({
    ...themed.base
  })
  warning(!className,
    'Please use `theme` instead of `className` to style Button.')
  return (
    <button
      {...props}
      disabled={disabled}
      className={stateClasses}
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
