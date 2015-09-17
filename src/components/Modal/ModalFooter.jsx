import React from 'react'
import cx from 'classnames'

export default class ModalFooter extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }
  render () {
    let { children, ...props } = this.props
    return (
      <footer {...props} className={cx('fxnone ph1 pv3/4 bgcblack5a tac', props.className)}>
        {children}
      </footer>
    )
  }
}
