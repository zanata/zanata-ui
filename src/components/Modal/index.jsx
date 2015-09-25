import React from 'react'
import { Modal as OverlayModal } from 'react-overlays'
import cx from 'classnames'
import Header from './ModalHeader'
import Title from './ModalTitle'
import Body from './ModalBody'
import Footer from './ModalFooter'
import Icon from '../Icon'

const commonClasses = cx(
  'posf a0'
)

const modalClasses = cx(
  commonClasses,
  'z5 ffsans'
)

const backdropClasses = cx(
  commonClasses,
  'z4 bgcblack op50'
)

class Modal extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    closeButton: React.PropTypes.bool
  }
  static defaultProps = {
    closeButton: true,
    closeLabel: 'Close'
  }
  render () {
    let { children, closeButton, ...props } = this.props
    let close = closeButton ? (
      <button aria-label={props.closeLabel} className='posa r0 t0 p1/2 dfx aic jcc csec70a z1' onClick={props.onHide}>
        <Icon name='cross' size='2' className='op70'/>
      </button>
    ) : undefined
    return (
      <OverlayModal
        {...props}
        containerClassName='has-modal'
        backdropClassName={backdropClasses}
        className={modalClasses}
      >
        <div className='dfx aic jcc posr z5 h100p pv1/2'>
          <div className='dfx fxdc w32 bxsh5 bgcwhite95a mh1/2 mv1 mah100p bdrs3/4 posr tac'>
            {close}
            {children}
          </div>
        </div>
      </OverlayModal>
    )
  }
}

Modal.Header = Header
Modal.Title = Title
Modal.Body = Body
Modal.Footer = Footer

export default Modal
