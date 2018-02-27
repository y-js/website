import { h, Component } from 'preact';
import Card from 'preact-material-components/Card'
import 'preact-material-components/Card/style.css'
import 'preact-material-components/Button/style.css'
import QuillDemo from './quill-demo'
import JigsawDemo from './jigsaw-demo'
import DrawingDemo from './drawing-demo'
import style from './style'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Card>
					<Card.Primary>
						<Card.Title>Shared Editing with Quill Editor</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						<QuillDemo></QuillDemo>
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>See Code</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Jigsaw Demo</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						<JigsawDemo></JigsawDemo>
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>See Code</Card.Action>
					</Card.Actions>
				</Card>
				<Card>
					<Card.Primary>
						<Card.Title>Drawing Demo</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						<DrawingDemo></DrawingDemo>
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>See Code</Card.Action>
					</Card.Actions>
				</Card>

				<Card>
					<Card.Primary>
						<Card.Title>Ace Demo</Card.Title>
					</Card.Primary>
					<Card.SupportingText>
						..
					</Card.SupportingText>
					<Card.Actions>
						<Card.Action>See Code</Card.Action>
					</Card.Actions>
				</Card>
			</div>
		)
	}
}
