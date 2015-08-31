import React from 'react'
import Input from '../Input'

export default class App extends React.Component {
  render () {

    return (
      <div>
        <h1 className='fz5 csec mb1'>Patterns</h1>
        <h2 className='fz4 fwl mb1 csec'>Forms</h2>
        <h3 className='fz3 fwsb mb1/2 csec'>Inputs</h3>
        <div className='w16'>
          <Input label='Test input' placeholder='Test input no outline' className='w100p mb1' />
          <Input label='Test input outline' placeholder='Test input with outline' outline className='w100p mb1&1/2' />
          <Input label='Test input hidden' placeholder='Test input with hidden label' outline hideLabel className='w100p mb1' />
          <div className='mb1'>
            <Input label='Test input with description' placeholder='Test input with description' description='This is a great input box that you should totally fill in' outline className='w100p' />
          </div>
          <Input label='Test input disabled' placeholder='Test input disabled' value='I&#39;m disabled' disabled outline className='w100p mb1' />
          <Input label='Test input error' placeholder='This can&#39;t be empty' status='danger' outline className='w100p mb1' />
          <Input label='Test input success with description' placeholder='Success' value='Awwww yeeeah!' description='Great job you got it right' status='success' outline className='w100p' />
        </div>
      </div>
    )
  }
}
