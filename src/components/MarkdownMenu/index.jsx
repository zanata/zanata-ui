import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { lexer } from 'marked'

class MarkdownMenu extends Component {

  render () {
    let parsedMarkdown = lexer(this.props.markdown)
    let menu = []
    let menuNum = 0

    parsedMarkdown.forEach(function (rule) {
      if (rule.type === 'heading') {
        if (rule.depth === 2) {
          menu[menuNum] = {
            title: rule.text,
            sections: []
          }
          menuNum++
        } else if (rule.depth === 3) {
          menu[menuNum - 1].sections.push(
            {
              title: rule.text
            }
          )
        }
      }
    })

    return (
      <nav>
        <ul>
          {menu.map(function (item, i) {
            return <li key={i}>
                <Link className='fz1 fwsb' to={'/styles#' + escapeText(item.title)}>{item.title}</Link>
                <ul className='mb1/2'>
                  {item.sections.map(function (section, sectionKey) {
                    return <li key={sectionKey}><Link to={'/styles#' + escapeText(section.title)}>{section.title}</Link></li>
                  })}
                </ul>
              </li>
          })}
        </ul>
      </nav>
    )
  }
}

MarkdownMenu.propTypes = {
  markdown: PropTypes.string
}

function escapeText (text) {
  return text.toLowerCase().replace(/[^\w]+/g, '-')
}

export default MarkdownMenu
