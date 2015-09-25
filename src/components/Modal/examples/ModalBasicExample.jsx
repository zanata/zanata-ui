import React from 'react'
import Modal from '../'
import Button from '../../Button'

// const Button = ButtonFactory(React)

export default class ModalBasicExample extends React.Component {
  state = {
    showModal: false
  }
  close = () => {
    this.setState({ showModal: false })
  }
  open = () => {
    this.setState({ showModal: true })
  }
  render () {
    return (
      <div className='modal-example'>
        <Button onClick={this.open} kind='primary'>
          Open Modal
        </Button>
        <p>Click to get the full Modal experience!</p>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>My Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body scrollable={false}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
          </Modal.Body>
          <Modal.Footer>
            <button className='mr1 cpri' onClick={this.close}>Cancel</button>
            <Button kind='default'>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
