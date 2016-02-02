import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class ModalFooter extends Component {
  render () {
    let { children, ...props } = this.props
    return (
      <footer
        className={cx('fxnone ph1 pv3/4 bgcblack5a tac', props.className)}
        {...props}
      >
        {children}
      </footer>
    )
  }
}

ModalFooter.propTypes = {
  children: PropTypes.node
}
