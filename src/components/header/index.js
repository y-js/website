import { h, Component } from 'preact';
import { route } from 'preact-router';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';
// import { drawer } from './style.css';

export default class Header extends Component {
	closeDrawer() {
	  this.drawer.MDComponent.open = false;
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
	};

	goHome = this.linkTo('/');
	goToMyProfile = this.linkTo('/profile');

	toggleDarkTheme = () => {
		this.setState(
			{
				darkThemeEnabled: !this.state.darkThemeEnabled
			},
			() => {
				if (this.state.darkThemeEnabled) {
					document.body.classList.add('mdc-theme--dark');
				}
				else {
					document.body.classList.remove('mdc-theme--dark');
				}
			}
		);
	}

	render() {
		return (
			<Drawer.PermanentDrawer ref={this.drawerRef} open={true}>
				<div class="mdc-permanent-drawer__toolbar-spacer"></div>
				<List>
					<List.LinkItem onClick={this.goHome}>
						<List.ItemIcon>home</List.ItemIcon>
						Home
					</List.LinkItem>
					<List.LinkItem onClick={this.goToMyProfile}>
						<List.ItemIcon>account_circle</List.ItemIcon>
						Profile
					</List.LinkItem>
				</List>
			</Drawer.PermanentDrawer>
		);
	}
}
