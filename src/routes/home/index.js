import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import Textfield from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';
import style from './style';
import QuillDemo from '../examples/quill-demo'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Card>
					<Card.Primary>
						<Card.Title><img src="/assets/images/yjs.png" alt="Yjs"/></Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						Yjs is a framework for real-time shared data. Several hosts can manipulate the same data at the same time.
						Yjs takes care of the conflicts.
					</Card.SupportingText>
					<Card.SupportingText>
						Applications for this framework include collaborative editing, collaborative drawing, and collaborative modeling.
						But Yjs is really a general purpose framework for any kind of data that can be manipulated by several clients at the same time.
					</Card.SupportingText>
					<Card.SupportingText>
					  Yjs implements shared data types as Concurrent Replicated Data Types (CRDT) and therefore supports peer-to-peer networks to distribute document updates.
					  In fact you can build a <a>Connector</a> for any kind of network. Check <a>Modules</a> to find all the options you have.
					</Card.SupportingText>
					<Card.SupportingText>
					  Yjs can store the shared document in a persistent database to store the document for offline use.
						Try turning off your internet connection and reload this website. All shared data will still exists
						and will be synced when the connection has been reestablished.
					</Card.SupportingText>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Collaborative Editing Demo</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						<QuillDemo></QuillDemo>
					</Card.SupportingText>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Shared Types</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
					  Yjs provides apstractions over the shared data as shared data types. Shared types
						can be manipulated, observed, and provide utility functions to bind the shared data to objects.
					</Card.SupportingText>
					<Card.SupportingText>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a href="https://github.com/y-js/y-map">map</a></td>
									<td>A shared Map implementation. Maps from text to any stringify-able object</td>
								</tr>
								<tr>
									<td><a href="https://github.com/y-js/y-array">array</a></td>
									<td>A shared Array implementation</td>
								</tr>
								<tr>
									<td><a href="https://github.com/y-js/y-xml">xml</a></td>
									<td>An implementation of the DOM. You can create a two way binding to Browser DOM objects</td>
								</tr>
								<tr>
									<td><a href="https://github.com/y-js/y-text">text</a></td>
									<td>Collaborate on text. Supports two way binding to the <a href="https://ace.c9.io">Ace Editor</a>, textareas, input elements, and HTML elements (e.g. &lt;<em>h1</em>&gt;, or &lt;<em>p</em>&gt;)</td>
								</tr>
								<tr>
									<td><a href="https://github.com/y-js/y-richtext">richtext</a></td>
									<td>Collaborate on rich text. Supports two way binding to the <a href="http://quilljs.com/">Quill Rich Text Editor</a></td>
								</tr>
							</tbody>
						</table>
					</Card.SupportingText>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Connectors</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a href="https://github.com/y-js/y-webrtc">webrtc</a></td>
									<td>Propagate updates Browser2Browser via WebRTC</td>
								</tr>
								<tr>
									<td><a href="https://github.com/y-js/y-websockets-client">websockets</a></td>
									<td>Set up <a href="https://github.com/y-js/y-websockets-client">a central server</a>, and connect to it via websockets</td>
								</tr>
								<tr>
									<td><a href="https://github.com/y-js/y-xmpp">xmpp</a></td>
									<td>Propagate updates in a XMPP multi-user-chat room (<a href="http://xmpp.org/extensions/xep-0045.html">XEP-0045</a>)</td>
								</tr>
								<tr>
									<td><a href="https://github.com/pgte/y-ipfs-store">ipfs</a></td>
									<td>A connector for the IPFS network!</td>
								</tr>
							</tbody>
						</table>
					</Card.SupportingText>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Persistence</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
					<table>
						<thead>
							<tr>
							<th>Name</th>
							<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><a href="https://github.com/y-js/y-memory">memory</a></td>
								<td>In-memory storage</td>
							</tr>
							<tr>
								<td><a href="https://github.com/y-js/y-indexeddb">indexeddb</a></td>
								<td>Offline storage for the browser</td>
							</tr>
							<tr>
								<td><a href="https://github.com/y-js/y-leveldb">leveldb</a></td>
								<td>Persistent storage for node apps</td>
							</tr>
						</tbody>
					</table>
					</Card.SupportingText>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>License</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						Yjs is proudly MIT licensed!
					</Card.SupportingText>
					<Card.SupportingText>
						<img alt="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/" />
						<span style="width:18px;display:inline-block"/>
					</Card.SupportingText>
				</Card>
			</div>
		);
	}
}
