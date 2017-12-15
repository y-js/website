import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Examples from 'async!../routes/examples';
import Tutorial from 'async!../routes/tutorial';
import Modules from 'async!../routes/modules';
import Documentation from 'async!../routes/documentation';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div id='content-background' />
				<div id='app-scroll-area'>
					<div id='app-content'>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Examples path="/examples"/>
							<Tutorial path="/tutorial"/>
							<Modules path="/modules"/>
							<Documentation path="/documentation"/>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}
