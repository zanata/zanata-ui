import React, { PropTypes } from 'react'
import { merge } from 'lodash'
import Base from '../Base'
import Loader from '../Loader'

const classes = {
  root: {
    base: {
      ai: 'Ai(c)',
      d: 'D(if)',
      jc: 'Jc(sb)',
      trs: 'Trs(aeob)'
    }
  },
  loader: {
    base: {
      m: 'Mstart(eq)'
    }
  }
}

const LoaderText = ({
  children,
  loading,
  loadingText,
  size,
  theme,
  ...props
}) => {
  const themed = merge({}, classes, theme)
  return (
    <Base tagName='span'
      componentName='LoaderText'
      theme={themed.root} {...props}>
      {loading
        ? <Base theme={themed.root}>
            {loadingText} <Loader theme={themed.loader} size={size} />
        </Base>
        : children
      }
    </Base>
  )
}

LoaderText.propTypes = {
  /**
   * The text/element that is display when there **is no** loading
   */
  children: PropTypes.node,
  /**
   * The text that is displayed when there **is** loading
   */
  loadingText: PropTypes.string,
  /**
   * If the component is loading or not
   */
  loading: PropTypes.bool,
  /**
   * Based on the size from [<Loader />](#Loader).
   * This only changes the size of the loader element not the text.
   */
  size: PropTypes.string,
  /**
   * Based on an [atomic classes](http://acss.io/reference) object.
   * This should be merged to a single object before it is passed
   * into the base component.
   * Each component can have it's own structure for it's theme object.
   */
  theme: PropTypes.object
}

LoaderText.defaultProps = {
  loading: false,
  loadingText: 'Loading'
}

export default LoaderText
