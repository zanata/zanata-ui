import React from 'react'
import Select from '../../components/Select/lib/Select.js'
import Input from '../../components/Input'
import Icon from '../../components/Icon'

export default class App extends React.Component {
  handleChange (val) {
    console.log(val)
  }
  render () {
    let languageList = [
      { value: 'one', label: 'French' },
      { value: 'two', label: 'Russian' }
    ]
    return (
      <div>
        <div className='dfx aic mb1'>
          <div className='fxauto dfx aic'>
            <h1 className='fz2 dib csec'>System Glossary</h1>
            <Icon name='chevron-right' className='mh1/2 csec50' size='s1'/>
            <Select
              name='language-selection'
              value=''
              className='w8'
              options={languageList}
              onChange={this._handleChange}
            />
          </div>
          <div>
            <button className='cpri dfx aic'><Icon name='import' className='mr1/4' /><span>Import Glossary</span></button>
          </div>
        </div>
        <div className='dfx aic mb1'>
          <div className='fxauto'>
            <div className='posr w8'>
              <Input label='Search Glossary' outline className='w100p pr1&1/2' type='search' placeholder='Search Glossary' />
              <button className='posa r0 t0 fzn1 h1&1/2 p1/4 csec50 dfx aic'>
                <Icon name='search' size='s1' />
              </button>
            </div>
          </div>
          <div className='dfx aic'>
            <Icon name='glossary' className='csec50 mr1/4' />
            <span className='csec'>4</span>
          </div>
        </div>
        <p>Table goes here</p>
      </div>
    )
  }
}
