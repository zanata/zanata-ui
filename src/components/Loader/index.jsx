import React, { Component, PropTypes } from 'react'
import warning from 'warning'
import { mergeClasses, flattenClasses } from '../../utils/styleUtils'
import Icon from '../Icon'

const classes = {
  base: {
    ai: 'Ai(c)',
    d: 'D(if)',
    jc: 'Jc(sb)'
  },
  '-1': {
    w: 'W(ms1)',
    h: 'H(ms1)'
  },
  '0': {
    w: 'W(ms2)',
    h: 'H(ms2)'
  },
  '1': {
    w: 'W(ms3)',
    h: 'H(ms3)'
  },
  '2': {
    w: 'W(ms4)',
    h: 'H(ms4)'
  },
  '3': {
    w: 'W(ms5)',
    h: 'H(ms5)'
  },
  '4': {
    w: 'W(ms6)',
    h: 'H(ms6)'
  },
  '5': {
    w: 'W(ms7)',
    h: 'H(ms7)'
  },
  '6': {
    w: 'W(ms8)',
    h: 'H(ms8)'
  },
  '7': {
    w: 'W(ms9)',
    h: 'H(ms9)'
  },
  '8': {
    w: 'W(ms10)',
    h: 'H(ms10)'
  },
  '9': {
    w: 'W(ms11)',
    h: 'H(ms11)'
  },
  '10': {
    w: 'W(ms12)',
    h: 'H(ms12)'
  }
}

const dotClasses = {
  base: {
    animdur: 'Animdur(0.9s)',
    animic: 'Animic(i)',
    animtf: 'Animtf(eob)',
    animn: 'Animn(anibd)',
    h: 'H(27.8%)',
    w: 'W(27.8%)'
  },
  second: {
    animdel: 'Animdel(0.15s)'
  },
  third: {
    animdel: 'Animdel(0.3s)'
  }
}

const Loader = ({
  size = '0',
  theme,
  className,
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  const stateTheme = mergeClasses(
    themed.base,
    themed[size]
  )
  warning(!className, 'Please use `theme` instead of `className` to style Loader.')
  return (
    <span className={flattenClasses(stateTheme)} {...props}>
      <Icon name='dot' className={flattenClasses(dotClasses.base)} />
      <Icon name='dot' className={flattenClasses(mergeClasses(dotClasses.base, dotClasses.second))} />
      <Icon name='dot' className={flattenClasses(mergeClasses(dotClasses.base, dotClasses.third))} />
    </span>
  )
}

Loader.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.object
}

export default Loader
