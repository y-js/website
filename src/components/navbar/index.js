import { Component } from 'preact'
import style from './style'

export default class Navbar extends Component {
  // Note: `user` comes from the URL, courtesy of our router
  render () {
    return (
      <nav class={style.navbar}>
        <ol>
          <li><a href='bikes'>Bikes</a></li>
          <li><a href='bikes/bmx'>BMX</a></li>
        </ol>
      </nav>
    )
  }
}
