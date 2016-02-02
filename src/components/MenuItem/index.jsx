import React, { Component, PropTypes } from 'react'

export default class MenuItem extends Component {
  render () {
    return (
      <li><a href={this.props.link}>{this.props.text}</a></li>
    )
  }
}

MenuItem.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
}
