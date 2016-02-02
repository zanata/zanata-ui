import React, { Component } from 'react'
import Button from '../'
import ButtonRound from '../../ButtonRound'
import ButtonLink from '../../ButtonLink'
import Icon from '../../Icon'
import LoaderText from '../../LoaderText'

const buttonTheme = { base: { m: 'mr1' } }
const h2Classes = 'fz4 fwl mb1 mt2 csec'
const h3Classes = 'fz3 fwsb mb1/2 mt1 csec'

class ButtonExample extends Component {
  state = {
    loading: false
  };
  _handleClick = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  };
  render () {
    const {
      loading,
      ...state
    } = this.state
    return (
      <div>
        <h2 className={h2Classes}>Buttons</h2>
        <h3 className={h3Classes}>Default</h3>
        <p>Buttons have their own scale, that is based off
          font scale cut skips sizes</p>
        <Button theme={buttonTheme}>Buttons Plain</Button>
        <Button theme={buttonTheme} disabled>Plain Disabled</Button>
        <h3 className={h3Classes}>Link</h3>
        <ButtonLink type='danger' theme={buttonTheme}>
          <Icon name='trash' className='mr1/8' />
          Danger Link button with Icon
        </ButtonLink>
        <ButtonLink type='success'
          theme={buttonTheme}
          onClick={() => this._handleClick()}
          loading={loading}>
          <Icon name='notification' className='mr1/8' />
          Success Link button with Icon and load
        </ButtonLink>
        <h3 className={h3Classes}>Round</h3>
        <ButtonRound theme={buttonTheme} size='n1'>
          Size Negative 1 button
        </ButtonRound>
        <ButtonRound theme={buttonTheme}>
          Default round button
        </ButtonRound>
        <ButtonRound theme={buttonTheme} size='1' disabled>
          Size 1 round disabled button
        </ButtonRound>
        <ButtonRound theme={buttonTheme} size='2'>
          Size 2 round button
        </ButtonRound>
        <ButtonRound theme={buttonTheme}>
          <Icon name='trash' className='mr1/8' />
          Default round button with Icon
        </ButtonRound>
        <h3 className={h3Classes}>Loading</h3>
        <ButtonRound theme={buttonTheme}
          onClick={() => this._handleClick()}
          disabled={loading}>
          <LoaderText loading={loading} loadingText='Default loading button'>
            Default loading button
          </LoaderText>
        </ButtonRound>
        <ButtonRound theme={buttonTheme}
          type='primary'
          onClick={() => this._handleClick()}
          disabled={loading}>
          <LoaderText loading={loading}>Primary loading button</LoaderText>
        </ButtonRound>
        <ButtonRound theme={buttonTheme}
          type='success'
          onClick={() => this._handleClick()}
          size='2'
          disabled={loading}>
          <LoaderText loading={loading} loadingText='Sending' size='2'>
            Success size 2 loading button
          </LoaderText>
        </ButtonRound>
      </div>
    )
  }
}

export default ButtonExample
