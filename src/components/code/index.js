import { Component } from 'preact'
import style from './style'

const hljsPromise = Promise.all([
  import('highlight.js/lib/highlight'),
  import('highlight.js/lib/languages/javascript')
]).then(([hljs, javascript]) => {
  hljs.registerLanguage('javascript', javascript)
  return hljs
})

export default class Livecode extends Component {
  componentDidMount () {
    hljsPromise.then(hljs => {
      hljs.highlightBlock(this.base)
    })
  }
  render ({ code }) {
    return (
      <pre class={style.code}><code class='javascript'>{code}</code></pre>
    )
  }
}
