// this is aliased in webpack config based on server/client build
import { api } from 'create-api'
import request from 'axios'

request.defaults.baseURL = 'https://www.reddit.com/'

export function fetchPosts(url) {
  const cacheKey = url
  const cache = api.cachedItems

  if (cache && cache.has(cacheKey)) {
    return Promise.resolve(cache.get(cacheKey))
  }

  return request.get(url).then(response => {
    cache && cache.set(cacheKey, response)
    return response
  })
}
