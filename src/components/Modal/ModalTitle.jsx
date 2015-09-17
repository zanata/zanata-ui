import React from 'react'
import cx from 'classnames'

export default class ModalTitle extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  render () {
    let { children, ...props } = this.props
    return (
      <h2 {...props} className={cx('fz3 fwl lhsingle csec', props.className)}>
        {children}
      </h2>
    )
  }
}
