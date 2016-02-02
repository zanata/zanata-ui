import React from 'react'
import InputExample from '../Input/example'
import Icons from '../Icons'
import Icon from '../Icon'
import Loader from '../Loader'
import ButtonRound from '../ButtonRound'
import ButtonExample from '../Button/example'
import OverlayTrigger from '../OverlayTrigger'
import Tooltip from '../Tooltip'

import ObjectDataExample from '../FixedDataTable/examples/ObjectDataExample'
import ModalBasicExample from '../Modal/examples/ModalBasicExample'

export default class App extends React.Component {
  render () {
    const tooltip = (
      <Tooltip id='tooltip'><strong>Holy guacamole!</strong> Check this info and all this other text I just added.</Tooltip>
    )

    const tooltipInverse = (
      <Tooltip id='tooltip' inverse><strong>Holy guacamole!</strong> I'm so dark guys</Tooltip>
    )

    const tooltipWithTitle = (
      <Tooltip id='tooltipTitle' title='Look at my title'>Wow I really have a title.</Tooltip>
    )

    const tooltipInverseWithTitle = (
      <Tooltip id='tooltipTitle' title='Look at my title' inverse>Wow I really have a title and I'm dark.</Tooltip>
    )

    return (
      <div>
        <Icons fileName='./src/components/Icons/icons.svg' />
        <h1 className='fz5 csec mb1'>Patterns</h1>
        <h2 className='fz4 fwl mb1 csec'>Icons</h2>
        <p className='mb1'><Icon name='admin' /></p>
        <p className='mb1'>More to come</p>
        <h2 className='fz4 fwl mb1 csec'>Loader</h2>
        <div className='mb1 dfx aic'>
          Default loader size:
          <span className='p1/4 bgcsec10 bdrs ml1/2 mr1 h1&1/2 w1&1/2 difx aic jcc'>
            <Loader />
          </span>
          Size 5 Loader:
          <span className='dib ml1/2'>
            <Loader size='5'/>
          </span>
        </div>
        <div className='mb1 ml1/2 dfx aic'>
          Size 10 loader: <Loader size='10' />
        </div>
        <h2 className='fz4 fwl mb1 csec'>Forms</h2>
        <h3 className='fz3 fwsb mb1/2 csec'>Inputs</h3>
        <div className='w16'>
          <InputExample />
        </div>
        <h2 className='fz4 fwl mb1 mt2 csec'>Fixed Data Table</h2>
        <h3 className='fz3 fwsb mb1/2 csec'>Basic</h3>
        <div>
          <ObjectDataExample />
        </div>
        <h2 className='fz4 fwl mb1 mt2 csec'>Overlays</h2>
        <p className='mb1'>See <a href='http://react-bootstrap.github.io/react-overlays/examples/#overlay' className='cpri'>overlay docs</a> for more info.</p>
        <h3 className='fz3 fwsb mb1/2 csec'>Tooltip</h3>
        <div className='mb1'>
          <OverlayTrigger trigger='click' overlay={tooltip}>
            <ButtonRound type='default'> Show a tooltip on click</ButtonRound>
          </OverlayTrigger>
        </div>
        <div className='mb2'>
          <OverlayTrigger placement='bottom' overlay={tooltip}>
            <ButtonRound type='success'> Show a bottom tooltip</ButtonRound>
          </OverlayTrigger>
        </div>
        <div className='mb1 dfx jcsb'>
          <OverlayTrigger placement='right' trigger='click' overlay={tooltipInverse}>
            <ButtonRound type='unsure'> Show a right tooltip with inverse tooltip on click</ButtonRound>
          </OverlayTrigger>
          <OverlayTrigger placement='left' overlay={tooltipWithTitle}>
            <ButtonRound type='danger' disabled> Show a left tooltip with title</ButtonRound>
          </OverlayTrigger>
        </div>
        <div className='mb2'>
          <OverlayTrigger trigger='click' overlay={tooltipInverseWithTitle}>
            <ButtonRound type='warning'> Show a inverse tooltip with title</ButtonRound>
          </OverlayTrigger>
        </div>
        <div className='mb2'>
          <ModalBasicExample />
        </div>
        <div className='mb2'>
          <ButtonExample />
        </div>
      </div>
    )
  }
}
