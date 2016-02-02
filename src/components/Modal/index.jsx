import React, { Component, PropTypes }from 'react'
import { Modal as OverlayModal } from 'react-overlays'
import cx from 'classnames'
import Header from './ModalHeader'
import Title from './ModalTitle'
import Body from './ModalBody'
import Footer from './ModalFooter'
import Icon from '../Icon'
import ButtonLink from '../ButtonLink'

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

export default class Modal extends Component {
  render () {
    let { children, closeButton, ...props } = this.props
    let close = closeButton ? (
      <ButtonLink aria-label={props.closeLabel}
        theme={{
          base: {
            pos: 'Pos(a)',
            e: 'End(0)',
            t: 'T(0)',
            p: 'P(rh)',
            z: 'Z(1)'
          }
        }}
        type='muted'
        onClick={props.onHide}>
        <Icon name='cross' size='2' className='op70'/>
      </ButtonLink>
    ) : undefined
    return (
      <OverlayModal
        {...props}
        containerClassName='has-modal'
        backdropClassName={backdropClasses}
        className={modalClasses}
      >
        <div className='dfx aic jcc posr z5 h100p pv1/2'>
          <div className={'dfx fxdc w32 bxsh5 bgcwhite95a' +
            ' mh1/2 mv1 mah100p bdrs3/4 posr tac'}>
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

Modal.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool
}
Modal.defaultProps = {
  closeButton: true,
  closeLabel: 'Close'
}
