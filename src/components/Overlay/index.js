import React, { cloneElement } from 'react'
import BaseOverlay from 'react-overlays/lib/Overlay'
import { elementType } from 'react-prop-types';
// import Fade from './Fade';
import cx from 'classnames';

export default class Overlay extends React.Component {
  static propTypes = {
    ...BaseOverlay.propTypes,
    /**
     * Set the visibility of the Overlay
     */
    show: React.PropTypes.bool,
    /**
     * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
     */
    rootClose: React.PropTypes.bool,
    /**
     * A Callback fired by the Overlay when it wishes to be hidden.
     */
    onHide: React.PropTypes.func,
    /**
     * Use animation
     */
    animation: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      elementType
    ]),
    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter: React.PropTypes.func,
    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering: React.PropTypes.func,
    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered: React.PropTypes.func,
    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit: React.PropTypes.func,
    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting: React.PropTypes.func,
    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited: React.PropTypes.func
  }
  static defaultProps = {
    transition: null,
    rootClose: false,
    show: false
  }
  render() {
    let {
        children: child
      , transition: transition
      , ...props } = this.props

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
