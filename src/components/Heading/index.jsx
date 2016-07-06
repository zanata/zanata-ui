import React, { PropTypes } from 'react'
import { flattenThemeClasses } from '../../utils/styleUtils'

const classes = {
  base: {
    c: 'C(pri)',
    m: 'M(0)',
    fz: 'Fz(ms0)',
    fw: 'Fw(i)',
    lh: 'Lh(1)'
  }
}
/**
 * Generates <h1> html element
*/
const Heading = ({
  children,
  theme,
  ...props
}) => {
  const headingClasses = flattenThemeClasses(classes, theme)
  return <h1 {...props} className={headingClasses} >
      {children}
  </h1>
}

Heading.propTypes = {
  children: PropTypes.node,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default Heading
