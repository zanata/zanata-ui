import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class ModalTitle extends Component {
  render () {
    let {
      children,
      ...props
    } = this.props
    return (
      <h2 {...props} className={cx('fz3 fwl lhsingle csec', props.className)}>
        {children}
      </h2>
    )
  }
}

ModalTitle.propTypes = {
  children: PropTypes.node
}
