import axios from 'axios'
import { API_KEY } from './env'

async function getResource(resource, options) {
  let promise = new Promise(resolve => {
    const apiKey = API_KEY
    const baseUrl = 'https://developer.nps.gov/api/v1'
    const queryString = Object.keys(options).map(key => `${key}=${encodeURIComponent(options[key])}`).join('&')
    const url = `${baseUrl}/${resource}?api_key=${apiKey}&${queryString}`

    resolve(axios.get(url))
  })

  let result = await promise
  return result.data
}

export {
  getResource,
}
