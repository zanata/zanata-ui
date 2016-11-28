import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import View from '../View'

const classes = {
  base: {
    fld: '',
    ai: 'Ai(c)',
    h: 'H(r2)',
    p: 'Py(rq) Px(rh)'
  },
  tight: {
    p: 'Py(rq) Px(rq)'
  },
  hideSmall: {
    d: 'D(n)--lesm'
  },
  '1': {
    w: 'W(1/6)'
  },
  '2': {
    w: 'W(2/8) W(2/6)--md W(1/6)--lg'
  },
  '3': {
    w: 'W(3/8) W(2/6)--md'
  }
}

/**
 * A Table Cell for use in TableRow component
 */
const TableCell = ({
  children,
  className,
  size = '1',
  theme,
  tight,
  hideSmall,
  ...props
}) => {
  const themed = merge({},
    classes,
    theme
  )
  const themeState = {
    base: merge({},
      themed.base,
      themed[size],
      hideSmall && themed.hideSmall,
      tight && themed.tight,
      className && { classes: className }
    )
  }
  return (
    <View
      {...props}
      theme={themeState}>
      {children}
    </View>
  )
}

TableCell.propTypes = {
  /**
   * The table cell content
   */
  children: PropTypes.node,
  /**
   * This should not be used.
   * Prefer theme or [atomic classes](http://acss.io/reference)
   * object over classes.
   */
  className: PropTypes.string,
  /**
   * Should this hide on small screen
   */
  hideSmall: PropTypes.bool,
  /**
   * Make the padding on the x axis tighter than default
   * Useful if adding EditableText as the content
   */
  tight: PropTypes.bool,
  /**
   * Loosely based on eighths
   * Except on small screens when 1 is hidden an 2 gets half width
   * e.g. 2 = 1/4 or 2/4 on small screens
   */
  size: PropTypes.oneOf(['1', '2', '3']),
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default TableCell
