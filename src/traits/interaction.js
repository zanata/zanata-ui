import React from 'react'

export default {
  componentWillMount () {
    this.setState(this.state || {})
    this.setState({
      hovered: false,
      focused: false,
      active: false
    })
  },
  componentDidMount () {
    React.findDOMNode(this).addEventListener('focus', this.onFocusClass.bind(this))
    React.findDOMNode(this).addEventListener('blur', this.onBlurClass.bind(this))
    React.findDOMNode(this).addEventListener('mouseover', this.onMouseOverClass.bind(this))
    React.findDOMNode(this).addEventListener('mouseout', this.onMouseOutClass.bind(this))
    React.findDOMNode(this).addEventListener('mousedown', this.onMouseDownClass.bind(this))
    React.findDOMNode(this).addEventListener('mouseup', this.onMouseUpClass.bind(this))
  },
  componentWillUnmount () {
    React.findDOMNode(this).removeEventListener('focus', this.onFocusClass)
    React.findDOMNode(this).removeEventListener('blur', this.onBlurClass)
    React.findDOMNode(this).removeEventListener('mouseover', this.onMouseOverClass)
    React.findDOMNode(this).removeEventListener('mouseout', this.onMouseOutClass)
    React.findDOMNode(this).removeEventListener('mousedown', this.onMouseDownClass)
    React.findDOMNode(this).removeEventListener('mouseup', this.onMouseUpClass)
  },
  onFocusClass () { this.setState({ focused: true }) },
  onBlurClass () { this.setState({ focused: false }) },
  onMouseOverClass () { this.setState({ hovered: true }) },
  onMouseOutClass () { this.setState({ hovered: false }) },
  onMouseDownClass () {
    this.setState({ active: true })
    // Need this to detect mouseup outside of button
    document.body.addEventListener('mouseup', this.onMouseUpClass.bind(this))
  },
  onMouseUpClass () {
    this.setState({ active: false })
    document.body.removeEventListener('mouseup', this.onMouseUpClass)
  }
}
