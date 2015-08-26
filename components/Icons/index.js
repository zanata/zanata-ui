import React from 'react'
import nets from 'nets'

class Icons extends React.Component {
  constructor () {
    super()
    this.state = {
      svgContent: ''
    }
  }
  componentDidMount () {
    let self = this
    nets({
      url: this.props.fileName,
      encoding: undefined
    }, function (err, resp, body) {
      if (err) throw err
      self.setState({svgContent: body})
    })
  }
  render () {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.state.svgContent }} />
    )
  }
}

Icons.propTypes = {
  fileName: React.PropTypes.string.isRequired
}

export default Icons
