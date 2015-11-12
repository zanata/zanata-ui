import React from 'react'
import Select from '../../components/Select/lib/Select'
import Input from '../../components/Input'
import Icon from '../../components/Icon'

export default class App extends React.Component {
  _handleChange (val) {
    console.log(val)
  }
  render () {
    let languageList = [
      { value: 'one', label: 'French', count: 432 },
      { value: 'two', label: 'Russian', count: 34 },
      { value: 'three', label: 'Spanish' },
      { value: 'four', label: 'Chinese - Traditional, yes really', count: 2045 }
    ]
    let optionOutput = (op) => {
      let count = op.count || 0
      return <span className='dfx aic jcsb'><span className='tove ovh whsnw'>{op.label}</span><span className='csec50 pl1/4'>{count}</span></span>
    }
    return (
      <div>
        <div className='dfx aic mb2'>
          <div className='fxauto dfx aic'>
            <h1 className='fz2 dib csec whsnw'>System Glossary</h1>
            <Icon name='chevron-right' className='mh1/2 csec50' size='s1'/>
            <Select
              name='language-selection'
              value=''
              placeholder='Select a translation language…'
              optionRenderer={optionOutput}
              options={languageList}
              onChange={this._handleChange}
            />
          </div>
          <div>
            <button className='cpri dfx aic whsnw'><Icon name='import' className='mr1/4' /><span>Import Glossary</span></button>
          </div>
        </div>
        <div className='dfx aic mb1'>
          <div className='fxauto'>
            <div className='posr w8'>
              <Input hideLabel
                label='Search Glossary'
                border='outline'
                type='search'
                placeholder='Search Glossary'
                icon='search'
                loading
                onReset={console.log('Reset')}
                resetButton />
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
