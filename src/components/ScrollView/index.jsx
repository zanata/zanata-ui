import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import View from '../View'

/**
 * Scrollbar enabled flexbox. Based on View component
 */
const ScrollView = ({
  children,
  theme,
  ...props
}) => {
  const classes = {
    base: {
      flxs: '',
      flxg: 'Flxg(1)',
      ov: 'Ov(a)',
      ovh: 'Ovx(h)',
      ovs: 'Ovs(touch)'
    }
  }
  return (
    <View {...props} theme={merge({}, classes, theme)}>
      <View theme={{
        base: {
          flxg: 'Flxg(1)',
          p: 'Px(rh) Px(r1)--sm',
          pos: 'Pos(r)',
          w: 'W(100%)'
        }
      }}>
        {children}
      </View>
    </View>
  )
}

ScrollView.propTypes = {
  children: PropTypes.node,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

export default ScrollView
