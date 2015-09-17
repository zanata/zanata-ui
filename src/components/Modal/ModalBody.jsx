import React from 'react'
import cx from 'classnames'

export default class ModalBody extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  render () {
    let { children, ...props } = this.props
    return (
      <div {...props} className={cx('fxauto ovya ph1 pt1 pb2', props.className)}>
        {children}
      </div>
    )
  }
}
