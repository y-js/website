
import Y from 'yjs'
export { default as Y } from 'yjs'
import extendWebsocketsClient from 'y-websockets-client'

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
  return instances.get(room)
}