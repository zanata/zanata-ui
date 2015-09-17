import React from 'react'
import cx from 'classnames'

export default class ModalHeader extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  render () {
    let { children, ...props } = this.props
    return (
      <header {...props} className={cx('p1', props.className)}>
        {children}
      </header>
    )
  }
}
