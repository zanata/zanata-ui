import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class ModalHeader extends Component {
  render () {
    const {
      children,
      ...props
    } = this.props
    return (
      <header {...props} className={cx('p1', props.className)}>
        {children}
      </header>
    )
  }
}

ModalHeader.propTypes = {
  children: PropTypes.node
}
