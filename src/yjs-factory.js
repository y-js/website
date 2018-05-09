
import extendWebsocketsClient from 'y-websockets-client'
import _Y from 'yjs/src/Y.dist.js'

export const Y = _Y

extendWebsocketsClient(Y)

const instances = new Map()

export function createYjsInstance (room) {
  if (instances.has(room) === false) {
    instances.set(room, new Y(room, {
      connector: {
        name: 'websockets-client',
        url: 'http://127.0.0.1:1234'
      }
    }))
  }
  window.y = instances.get(room)
  return instances.get(room)
}
