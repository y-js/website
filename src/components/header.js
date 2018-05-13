
import { h, Component } from 'preact';

export default class Header extends Component {
  render() {
    return (
      <header class="header">
        <div class="container">
          <h1 class="site-title">The Yjs Library</h1>
          <span class="site-tagline">A CRDT library with a powerful abstraction over shared data</span>
        </div>
      </header>
    )
  }
}