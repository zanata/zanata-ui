import React from 'react'
import cx from 'classnames'

const { node, bool, string } = React.PropTypes

export default class ModalBody extends React.Component {
  static propTypes = {
    scrollable: bool,
    className: string,
    children: node
  }
  static defaultProps = {
    scrollable: true
  }
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
