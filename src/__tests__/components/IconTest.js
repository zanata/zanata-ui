jest.disableAutomock()

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Icon from '../../components/Icon'

describe('IconTest', () => {
  it('Icon markup', () => {
    const actual = ReactDOMServer.renderToStaticMarkup(
      <Icon name="classical" title="Mozart" size="n1"/>)

    const expectedSvgContents = {
      __html: '<use xlink:href="#Icon-classical" />'
    }

    const expected = ReactDOMServer.renderToStaticMarkup(
      <span title="Mozart" className="D(ib) Flxs(0) Pos(r) W(msn1) H(msn1)">
        <svg className="Pos(a) H(100%) W(100%) T(0) Start(0)" style={{fill:'currentColor'}} dangerouslySetInnerHTML={expectedSvgContents}/>
      </span>
    )
    expect(actual).toEqual(expected)
  })
})
