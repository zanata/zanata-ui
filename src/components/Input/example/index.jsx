import React from 'react'
import Input from '../'

export default class InputExample extends React.Component {
  state = {
    myinput: ''
  }
  _handleInputChange = (event) => {
    console.log(event.target.value)
  }
  _handleInputFocus = (customIndex) => {
    return (event) => {
      console.info('focus', this, customIndex, event)
    }
  }
  _handleResetExampleChange = (event) => {
    this.setState({ myinput: event.target.value })
  }
  _handleReset = () => {
    console.log('Reset')
    this.setState({ myinput: '' })
  }
  render () {
    return (
      <div>
        <Input label='Test input' placeholder='Test input no outline' margin='mb1' className='w100p' />
        <Input label='Test input outline' placeholder='Test input with outline' border='outline' margin='mb1&1/2' className='w100p' />
        <Input label='Test input hidden underline' placeholder='Test input with hidden label' border='underline' margin='mb1' hideLabel className='w100p' />
        <Input label='Test input with description' placeholder='Test input with description' margin='mb1' description='This is a great input box that you should totally fill in' border='outline' className='w100p' />
        <Input label='Test input disabled' placeholder='Test input disabled' value='I&#39;m disabled' margin='mb1' disabled border='outline' className='w100p' />
        <Input label='Test input error underlined' onChange={this._handleInputChange} placeholder='This can&#39;t be empty' status='danger' border='underline' margin='mb1' className='w100p' />
        <Input label='Test input success with description' onFocus={this._handleInputFocus(4)} placeholder='Success' margin='mb1' defaultValue='Awwww yeeeah!' description='Great job you got it right' status='success' border='outline' className='w100p' />
        <Input label='Test input with reset'
               placeholder='You can reset this input'
               value={this.state.myinput}
               border='outline'
               onChange={this._handleResetExampleChange}
               onReset={this._handleReset}
               resetButton
               margin='mb1'
               className='w100p' />
      </div>
    )
  }
}
