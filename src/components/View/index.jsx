import React, { PropTypes } from 'react'
import { flattenThemeClasses } from '../../utils/styleUtils'

const classes = {
  base: {
    ai: 'Ai(st)',
    d: 'D(f)',
    fld: 'Fld(c)',
    flxs: 'Flxs(0)'
  }
}
/**
 * A flexbox component in div element
 */
const View = ({
  name,
  children,
  theme,
  ...props
}) => (
  <div name={name}
    className={flattenThemeClasses(classes, theme)}
    {...props}>
    {children}
  </div>
)

View.propTypes = {
  /**
   * Name attribute
   */
  name: PropTypes.string,
  /**
   * The content for this flexbox
   */
  children: PropTypes.node,
  /**
   * Based on an [atomic classes](acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default View
