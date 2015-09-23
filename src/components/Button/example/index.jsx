import Button from '../'
import stampit from 'react-stampit'
import React from 'react'

const ButtonExampleFactory = React => {
  return stampit(React, {
    init () {
      this.state = {
        loading: false
      }
    },
    _handleClick () {
      this.setState({ loading: true })
      setTimeout(() => {
        this.setState({ loading: false })
      }, 3000)
    },
    render () {
      const {
        loading,
        ...state
      } = this.state
      return (
        <div>
          <h2 className='fz4 fwl mb1 mt2 csec'>Buttons</h2>
          <h3 className='fz3 fwsb mb1/2 csec'>Sizes</h3>
          <p>Buttons have their own scale, that is based off font scale cut skips sizes</p>
          <Button className='mr1' size={-1} kind='default'>Size Negative 1 button</Button>
          <Button className='mr1' kind='default'>Default button</Button>
          <Button className='mr1' size={1} kind='default'>Size 1 button</Button>
          <Button className='mr1' size={2} kind='default'>Size 2 button</Button>
          <h3 className='fz3 fwsb mt1 mb1/2 csec'>Loading</h3>
          <Button className='mr1' kind='default' onClick={() => this._handleClick()} loading={loading}>Default loading button</Button>
          <Button className='mr1' kind='primary' onClick={() => this._handleClick()} loading={loading}>Primary loading button</Button>
          <Button className='mr1' kind='success' onClick={() => this._handleClick()} size={2} loading={loading}>Success size 2 loading button</Button>
        </div>
      )
    }
  })
}

export default ButtonExampleFactory(React)
