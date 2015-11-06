import React from 'react'
import Select from '../../components/Select/lib/Select'
import Input from '../../components/Input'
import Icon from '../../components/Icon'

export default class App extends React.Component {
  handleChange (val) {
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
      return <span className="dfx aic jcsb"><span className="tove ovh whsnw">{op.label}</span><span className='csec50 pl1/4'>{count}</span></span>
    }
    return (
      <div>
        <div className='dfx aic mb1'>
          <div className='fxauto dfx aic'>
            <h1 className='fz2 dib csec whsnw'>System Glossary</h1>
            <Icon name='chevron-right' className='mh1/2 csec50' size='s1'/>
            <Select
              name='language-selection'
              value=''
              placeholder="Select a translation language…"
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
