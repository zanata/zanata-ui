import React, { PropTypes } from 'react'
import warning from 'warning'
import Button from '../Button'
import { mergeClasses } from '../../utils/styleUtils'

const classes = {
  base: {
    c: 'C(pri)',
    trs: 'Trs(aeo)',
    hover: {
      filter: 'Brightness(.75):h'
    },
    focus: {
      filter: 'Brightness(.75):f'
    },
    active: {
      filter: 'Brightness(.5):a'
    }
  },
  default: {
    c: 'C(pri)'
  },
  primary: {
    c: 'C(pri)'
  },
  success: {
    c: 'C(success)'
  },
  unsure: {
    c: 'C(unsure)'
  },
  warning: {
    c: 'C(warning)'
  },
  danger: {
    c: 'C(danger)'
  },
  muted: {
    c: 'C(muted)'
  }
}

const ButtonLink = ({
  children,
  disabled,
  theme = {},
  type = 'default',
  className,
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  const stateTheme = {
    base: mergeClasses(
      themed.base,
      themed[type]
    )
  }
  warning(!className,
    'Please use `theme` instead of `className` to style ButtonLink.')
  return (
    <Button
      {...props}
      disabled={disabled}
      theme={stateTheme}
    >
      {children}
    </Button>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  theme: PropTypes.object
}

export default ButtonLink
