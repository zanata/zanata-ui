import React, { PropTypes } from 'react'
import warning from 'warning'
import { merge } from 'lodash'
import View from '../View'

const classes = {
  base: {
    fld: 'Fld(r)!'
  },
  align: {
    start: {
      ai: 'Ai(fs)'
    },
    end: {
      ai: 'Ai(fe)'
    },
    center: {
      ai: 'Ai(c)'
    },
    baseline: {
      ai: 'Ai(b)'
    },
    stretch: {
      ai: 'Ai(st)'
    }
  }
}
/**
 * A flexbox component that align all elements (props.children)
 * horizontally in a row.
 * Can be used as standalone or as children of an element.
 */
const Row = ({
  align = 'center',
  children,
  className,
  theme = {},
  ...props
}) => {
  warning(!className,
    'Please use `theme` instead of `className` to style Row.')
  const themed = merge({},
    classes,
    theme
  )
  const themeState = {
    base: merge({},
      themed.base,
      themed.align[align]
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

Row.propTypes = {
  /**
   * Alignment of the children within the row
   */
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  /**
   * The content for this row
   */
  children: PropTypes.node,
  /**
   * This should not be used.
   * Prefer theme or [atomic classes](http://acss.io/reference)
   * object over classes.
   */
  className: PropTypes.string,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default Row
