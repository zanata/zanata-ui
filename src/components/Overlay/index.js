import React, { cloneElement, Component, PropTypes } from 'react'
import BaseOverlay from 'react-overlays/lib/Overlay'
import { elementType } from 'react-prop-types'
import cx from 'classnames'

export default class Overlay extends Component {
  render () {
    const {
      children,
      transition,
      ...props
    } = this.props
    let child = children
    // if (transition === true) {
    //   transition = Fade
    // }
    if (!transition) {
      child = cloneElement(child, {
        className: cx('op100', child.props.className)
      })
    }
    return (
      <BaseOverlay
        {...props}
        transition={transition}
      >
        {child}
      </BaseOverlay>
    )
  }
}

Overlay.propTypes = {
  ...BaseOverlay.propTypes,
  children: PropTypes.node,
  transition: PropTypes.element,
  /**
   * Set the visibility of the Overlay
   */
  show: PropTypes.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: PropTypes.bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   */
  onHide: PropTypes.func,
  /**
   * Use animation
   */
  animation: PropTypes.oneOfType([
    PropTypes.bool,
    elementType
  ]),
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: PropTypes.func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: PropTypes.func
}

Overlay.defaultProps = {
  transition: null,
  rootClose: false,
  show: false
}
