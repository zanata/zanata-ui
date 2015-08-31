import React from 'react'
import css from './styles/index.css'
import Router from 'react-router'
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router'
import Icons from './components/Icons'
import Icon from './components/Icon'
import Styles from './components/Styles'
import Patterns from './components/Patterns'
import Glossary from './views/Glossary'

class App extends React.Component {
  componentDidMount () {
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash)
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split('#')
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0]
        if (document.getElementById(hash)) {
          document.getElementById(hash).scrollIntoView({behavior: 'smooth'})
        }
      }
    }
    scrollToAnchor()
    window.onhashchange = scrollToAnchor
  }
  render () {
    return (
    <div>
        <Icons fileName='components/Icons/icons.svg' />
        <nav className='posf t0 h2 w100p z4 bdb bdcsec20 bgcwhite dfx'>
          <Link to='styles' className='p1/2 h2 cpri'>Styles</Link>
          <Link to='patterns' className='p1/2 h2 cpri'>Patterns</Link>
          <Link to='glossary' className='p1/2 h2 cpri'>Glossary</Link>
        </nav>
        <div className='p1 posr t2'>
          <RouteHandler/>
        </div>
      </div>
    )
  }
}

// declare our routes and their hierarchy
let routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Styles}/>
    <Route name='styles' path='/styles' handler={Styles}/>
    <Route name='patterns' path='/patterns' handler={Patterns}/>
    <Route name='glossary' path='/glossary' handler={Glossary}/>
  </Route>
)

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('app'))
})
