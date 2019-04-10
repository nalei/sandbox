/* eslint-disable */
import LRU from 'lru-cache'

let api
// this piece of code may run multiple times in development mode,
// so we attach the instantiated API to `process` to avoid duplications
if (process.__API__) {
  api = process.__API__
} else {
  api = {}
  api.cachedItems = LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15 // 15 min cache
  })
}

export { api }