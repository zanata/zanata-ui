import React from 'react'
import marked from 'marked'
let renderer = new marked.Renderer()

export default class MarkdownContent extends React.Component {
  static propTypes = {
    markdown: React.PropTypes.string
  }
  renderedMarkdown = () => {
    return {__html: marked(this.props.markdown, { renderer: renderer })}
  }
  render () {
    renderer.heading = function (text, level) {
      return `<h${level} class="${headingClass(level)}" id="${escapeText(text)}">${text}</h${level}>`
    }

    renderer.paragraph = function (text) {
      return `<p class="mb1">${text}</p>`
    }

    renderer.hr = function () {
      return '<hr>\n'
    }

    renderer.list = function (body, ordered) {
      var type = ordered ? 'ol' : 'ul'
      return '<' + type + ' class="mb1">\n' + body + '</' + type + '>\n'
    }

    renderer.listitem = function (text) {
      return '<li class="listd">' + text + '</li>\n'
    }

    renderer.code = function (code, lang, escaped) {
      // escaped = true
      if (!lang) {
        return `<pre class="mv1"><code>${(escaped ? code : escape(code, true))}\n</code></pre>`
      } else if (lang === 'example') {
        return `<h4 class="csec50 mt1/2">Example</h4>
                <div class="mb2 bd bdcsec30">
                  <div class="p1">
                    <div>${code}</div>
                  </div>
                  <pre class="p1/2 bdt bdcsec30 bgcsec10 fzn1"><code class="${this.options.langPrefix}${escape(lang, true)}">${escape(code, true)}\n</code></pre>\n
                </div>`
      } else {
        return `<pre class="mv1"><code class="${this.options.langPrefix}${escape(lang, true)}">${(escaped ? code : escape(code, true))}\n</code></pre>\n`
      }
    }

    return (
      <div dangerouslySetInnerHTML={this.renderedMarkdown()}></div>
    )
  }
}

function escapeText (text) {
  return text.toLowerCase().replace(/[^\w]+/g, '-')
}

function escape (html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function headingClass (level) {
  switch (level) {
    case 1:
      return 'fz5 fwl csec'
    case 2:
      return 'fz4 fwb csec mt2'
    case 3:
      return 'fz4 fwl csec mt2'
    case 4:
      return 'fz3 fwsb csec mt1&1/2'
    case 5:
      return 'fz2 csec mt1&1/2'
    case 6:
      return 'fz1 fwsb mt1/2'
    default:
      return ''
  }
}
