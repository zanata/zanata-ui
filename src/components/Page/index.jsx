import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import View from '../View'

const classes = {
  base: {
    flxs: '',
    flx: 'Flx(flx1)',
    ov: 'Ov(h)'
  }
}
/**
 * No scrollbar flex box. Based on View component
 */
const Page = ({
  children,
  theme,
  ...props
}) => {
  return (
    <View theme={merge({}, classes, theme)} {...props}>
      {children}
    </View>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default Page
