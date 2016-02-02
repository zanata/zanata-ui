import React from 'react'
import Modal from '../'
import ButtonRound from '../../ButtonRound'
import ButtonLink from '../../ButtonLink'

// const Button = ButtonFactory(React)

export default class ModalBasicExample extends React.Component {
  state = {
    showModal: false
  };
  close = () => {
    this.setState({ showModal: false })
  };
  open = () => {
    this.setState({ showModal: true })
  };
  render () {
    return (
      <div className='modal-example'>
        <ButtonRound onClick={this.open} type='primary'>
          Open Modal
        </ButtonRound>
        <p>Click to get the full Modal experience!</p>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>My Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body scrollable={false}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis luctus nisi et eros bibendum lacinia. Curabitur sed
              est nec urna pretium vulputate ut eget lectus. In ultricies,
              tellus non vehicula malesuada, augue sem aliquet tellus, ut
              faucibus turpis ante quis nibh. Ut vel turpis tortor, a
              consectetur ipsum. Sed posuere commodo vestibulum.
              Pellentesque volutpat diam sem.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <ButtonLink
              theme={{ base: { m: 'Mend(r1)' } }}
              onClick={this.close}>
              Cancel
            </ButtonLink>
            <ButtonRound type='primary'>Submit</ButtonRound>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
