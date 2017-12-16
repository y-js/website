import { h, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match'
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
	goToExamples = this.linkTo('/examples')
	goToTutorial = this.linkTo('/tutorial')
	goToModules = this.linkTo('/modules')
	goToDocumentation = this.linkTo('/documentation')

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
				<div class="mdc-permanent-drawer__toolbar-spacer" style="padding: 0;">
					<img src="http://y-js.org/images/yjs.png" style="margin: 0px auto; height: 80%;" />
				</div>
				<List class="unstyle-links">
				  <Link href="/" activeClassName="active" onClick={this.goHome}>
						<List.Item>
							<List.ItemIcon>home</List.ItemIcon>
							Home
						</List.Item>
					</Link>
					<Link href="/examples" activeClassName="active" onClick={this.goToExamples}>
					 <List.Item>
						 <List.ItemIcon>play_circle_filled</List.ItemIcon>
						 Examples
					 </List.Item>
				 </Link>
				 <Link href="/tutorial" activeClassName="active" onClick={this.goToTutorial}>
					 <List.Item>
						 <List.ItemIcon>directions</List.ItemIcon>
						 Tutorial
					 </List.Item>
				 </Link>
				 <Link href="/modules" activeClassName="active" onClick={this.goToModules}>
					 <List.Item>
						 <List.ItemIcon>view_module</List.ItemIcon>
						 Modules
					 </List.Item>
				 </Link>
				 <Link href="/documentation" activeClassName="active" onClick={this.goToDocumentation}>
					 <List.Item>
						 <List.ItemIcon>school</List.ItemIcon>
						 Documentation
					 </List.Item>
				 </Link>
				</List>
				<iframe src="https://ghbtns.com/github-btn.html?user=y-js&repo=yjs&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px" style="position: absolute; bottom: 50px;left: 60px;"></iframe>
			</Drawer.PermanentDrawer>
		);
	}
}
