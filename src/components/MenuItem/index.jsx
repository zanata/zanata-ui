'use strict'

import React from 'react'

class MenuItem extends React.Component {
  render () {
    return (
      <li><a href={this.props.link}>{this.props.text}</a></li>
    )
  }
}

MenuItem.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string
}

export default MenuItem
