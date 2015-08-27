
import React from 'react'
import nets from 'nets'
import MarkdownMenu from '../MarkdownMenu'
import MarkdownContent from '../MarkdownContent'

class MarkdownSection extends React.Component {
  constructor () {
    super()
    this.state = {
      markdown: ''
    }
  }
  componentDidMount () {
    let self = this
    if (this.props.content) {
      self.setState({markdown: this.props.content})
    } else {
      nets({
        url: this.props.fileName,
        encoding: undefined
      }, function (err, resp, body) {
        if (err) throw err
        self.setState({markdown: body})
      })
    }
  }
  render () {
    return (
      <div className='posr'>
        <div className='w8 h100p posf t0 l0 mt2 bgcpri cwhite90 p1'>
          <MarkdownMenu markdown={this.state.markdown}/>
        </div>
        <div className='ml8 pl1/2'>
          <MarkdownContent markdown={this.state.markdown} />
        </div>
      </div>
    )
  }
}

MarkdownSection.propTypes = {
  fileName: React.PropTypes.string,
  content: React.PropTypes.string
}

export default MarkdownSection
