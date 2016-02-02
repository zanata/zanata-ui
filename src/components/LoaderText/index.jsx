import React, { PropTypes } from 'react'
import warning from 'warning'
import { mergeClasses, flattenClasses } from '../../utils/styleUtils'
import Loader from '../Loader'

const classes = {
  base: {
    ai: 'Ai(c)',
    d: 'D(if)',
    jc: 'Jc(sb)',
    trs: 'Trs(aeob)'
  }
}

const loaderTheme = {
  base: {
    m: 'Mstart(rq)'
  }
}

const LoaderText = ({
  className,
  children,
  loading = false,
  loadingText = 'Loading',
  size,
  theme,
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  warning(!className,
    'Please use `theme` instead of `className` to style LoaderText.')
  return loading
    ? (<span className={flattenClasses(themed)} {...props}>
        {loadingText} <Loader theme={loaderTheme} size={size} />
      </span>)
    : (<span className={flattenClasses(themed)} {...props}>{children}</span>)
}

LoaderText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loadingText: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.object
}

export default LoaderText
