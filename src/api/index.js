// this is aliased in webpack config based on server/client build
import { createAPI } from 'create-api'

const api = createAPI({
  config: {
    baseURL: 'https://www.reddit.com/'
  }
})

export function fetchApi(request) {
  return api.get(request).then(response => {
    return response.data
  })
}
