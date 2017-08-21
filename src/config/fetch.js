import axios from 'axios'

export default async (type = 'GET', url = '', data = {}) => {
  type = type.toLowerCase()
  let resp
  if (process.env.NODE_ENV !== 'production') {
    url = /^\//.test(url) ? '/api' + url : '/api/' + url
  }

  if (type === 'get') {
    resp = await axios.get(url, {params: data})
  } else {
    resp = await axios[type](url, data)
  }

  if (resp.data.status !== 0) {
    throw new Error(resp.data)
  }

  return resp.data

}
