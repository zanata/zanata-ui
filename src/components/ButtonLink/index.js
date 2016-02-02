import React, { PropTypes } from 'react'
import Button from '../Button'
import { mergeClasses, flattenClasses } from '../../utils/styleUtils'

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
    },
    disabled: {
      c: 'C(pri):di'
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
  theme,
  type = 'default',
  ...props
}) => {
  const themed = mergeClasses(classes, theme)
  const stateTheme = {
    base: {
      ...themed.base,
      ...(type && themed[type])
    }
  }
  return (
    <Button
      disabled={disabled}
      theme={stateTheme}
      {...props}
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
