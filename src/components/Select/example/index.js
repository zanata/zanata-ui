import React, { Component } from 'react'
import Select from '../'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
]

const h2Classes = 'Fz(ms4) Fw(200) Mb(r1) Mt(r2) C(dark)'

class SelectExample extends Component {
  state = {
    value: ''
  };
  handleChange = (val) => {
    this.setState({ value: val ? val.value : '' })
  };
  render () {
    const {
      value
    } = this.state
    return (
      <div>
        <h2 className={h2Classes}>Select</h2>
        <Select
          name='select-example-2'
          value={value}
          placeholder='Select an option'
          options={options}
          onChange={this.handleChange}
        />
        <Select
          name='select-example-2'
          value={value}
          placeholder='Select an option'
          options={options}
          onChange={this.handleChange}
          className='Fz(ms2) Mt(r1) Mb(r2)'
        />
      </div>
    )
  }
}

export default SelectExample
