import { h, Component } from 'preact'
import { createYjsInstance, Y } from '../../../yjs-factory.js'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import style from './style'

const y = createYjsInstance('yQuillDemo')

export default class QuillDemo extends Component {

  shouldComponentUpdate	() {
    return false
  }

	componentDidMount() {
    if (typeof window !== 'undefined') {
      const editorElement = document.createElement('div')
  		this.base.innerHTML = ''
      this.base.insertBefore(editorElement, null)
      this.quill = new Quill(editorElement, {
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
            [{ color: [] }, { background: [] }],    // Snow theme fills in values
            [{ script: 'sub' }, { script: 'super' }],
            ['link', 'image'],
            ['link', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'  // or 'bubble'
      })
      this.quillBinding = new Y.QuillBinding(y.define('quill-demo', Y.Text), this.quill)
    }
	}

	componentWillUnmount() {
		this.quillBinding.destroy()
	}
	render() {
		return (
			<div></div>
		)
	}
}
