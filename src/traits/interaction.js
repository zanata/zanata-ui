import React from 'react'

export default {
  componentWillMount () {
    this.setState({
      hovered: false,
      focused: false,
      active: false,
      mouseUpHandler: this.handleMouseUpClass.bind(this),
      mouseMoveHandler: this.handleMouseOutClass.bind(this)
    })
  },
  componentDidMount () {
    React.findDOMNode(this).addEventListener('focus', this.handleFocusClass.bind(this))
    React.findDOMNode(this).addEventListener('blur', this.handleBlurClass.bind(this))
    React.findDOMNode(this).addEventListener('mouseover', this.handleMouseOverClass.bind(this))
    React.findDOMNode(this).addEventListener('mouseout', this.handleMouseOutClass.bind(this))
    React.findDOMNode(this).addEventListener('mousedown', this.handleMouseDownClass.bind(this))
    React.findDOMNode(this).addEventListener('mouseup', this.state.mouseUpHandler)
  },
  componentWillUnmount () {
    window.removeEventListener('mouseup', this.state.mouseUpHandler)
    window.removeEventListener('mousemove', this.state.mouseMoveHandler)
    React.findDOMNode(this).removeEventListener('focus', this.handleFocusClass)
    React.findDOMNode(this).removeEventListener('blur', this.handleBlurClass)
    React.findDOMNode(this).removeEventListener('mouseover', this.handleMouseOverClass)
    React.findDOMNode(this).removeEventListener('mouseout', this.handleMouseOutClass)
    React.findDOMNode(this).removeEventListener('mousedown', this.handleMouseDownClass)
    React.findDOMNode(this).removeEventListener('mouseup', this.state.mouseUpHandler)
  },
  handleFocusClass () { this.setState({ focused: true }) },
  handleBlurClass () { this.setState({ focused: false }) },
  handleMouseOverClass () { this.setState({ hovered: true }) },
  handleMouseOutClass (event) {
    this.setState({ hovered: false })
    window.removeEventListener('mousemove', this.state.mouseMoveHandler)
  },
  handleMouseDownClass () {
    this.setState({ active: true })
    // Need this to detect mouseup outside of button
    window.addEventListener('mouseup', this.state.mouseUpHandler)
    window.addEventListener('mousemove', this.state.mouseMoveHandler)
  },
  handleMouseUpClass (event) {
    this.setState({ active: false })
    event.stopPropagation()
    window.removeEventListener('mouseup', this.state.mouseUpHandler)
  },
  getState (disabler) {
    let is = {
      disabled: false,
      active: false,
      hovered: false,
      focused: false,
      default: false
    }
    if (this.props.disabled || disabler) {
      is.disabled = true
    } else if (this.state.active) {
      is.active = true
    } else if (this.state.hovered) {
      is.hovered = true
    } else if (this.state.focused) {
      is.focused = true
    } else {
      is.default = true
    }
    return is
  }
}
