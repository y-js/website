import { h, Component } from 'preact'
import { createYjsInstance, Y } from '../../../yjs-factory.js'
import './style'
import d3 from 'd3'

const y = createYjsInstance('yQuillDemo')
const drawing = y.define('drawing-demo', Y.Array)

export default class JigsawDemo extends Component {

  shouldComponentUpdate	() {
    return false
  }

	componentDidMount () {
    var renderPath = d3.svg.line()
      .x(function (d) { return d[0] })
      .y(function (d) { return d[1] })
      .interpolate('basic')

    var svg = d3.select(this.base.querySelector('#drawingCanvas'))
      .call(d3.behavior.drag()
        .on('dragstart', dragstart)
        .on('drag', drag)
        .on('dragend', dragend))

    // create line from a shared array object and update the line when the array changes
    function drawLine (yarray) {
      var line = svg.append('path').datum(yarray.toArray())
      line.attr('d', renderPath)
      yarray.observe(function (event) {
        line.remove()
        line = svg.append('path').datum(yarray.toArray())
        line.attr('d', renderPath)
      })
    }
    // call drawLine every time an array is appended
    this.drawingObserver =
    function (event) {
      event.removedElements.forEach(function () {
        // if one is deleted, all will be deleted!!
        svg.selectAll('path').remove()
      })
      event.addedElements.forEach(function (path) {
        drawLine(path)
      })
    }
    drawing.observe(this.drawingObserver)
    // draw all existing content
    for (var i = 0; i < drawing.length; i++) {
      drawLine(drawing.get(i))
    }

    // clear canvas on request
    this.base.querySelector('#clearDrawingCanvas').onclick = function () {
      drawing.delete(0, drawing.length)
    }

    var sharedLine = null
    function dragstart () {
      drawing.insert(drawing.length, [Y.Array])
      sharedLine = drawing.get(drawing.length - 1)
    }

    // After one dragged event is recognized, we ignore them for 33ms.
    var ignoreDrag = null
    function drag () {
      if (sharedLine != null && ignoreDrag == null) {
        ignoreDrag = window.setTimeout(function () {
          ignoreDrag = null
        }, 10)
        sharedLine.push([d3.mouse(this)])
      }
    }

    function dragend () {
      sharedLine = null
      window.clearTimeout(ignoreDrag)
      ignoreDrag = null
    }
	}

	componentWillUnmount () {
    drawing.unobserve(this.drawingObserver)
	}
	render () {
		return (
      <div>
        <button type="button" id="clearDrawingCanvas">Clear Drawing</button>
        <svg id="drawingCanvas" viewBox="0 0 800 600" width="100%"></svg>
      </div>
		)
	}
}
