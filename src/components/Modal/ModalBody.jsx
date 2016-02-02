import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class ModalBody extends Component {
  render () {
    const { children,
            className,
            scrollable,
            ...props
          } = this.props
    const classes = cx(
      'fxauto ph1 pt1 pb2',
      className,
      scrollable && 'ovya'
    )
    return (
      <div {...props} className={classes}>
        {children}
      </div>
    )
  }
}

ModalBody.propTypes = {
  scrollable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}
ModalBody.defaultProps = {
  scrollable: true
}
