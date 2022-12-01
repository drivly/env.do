export const api = {
  icon: '🚀',
  name: 'env.do',
  description: 'Environment Management API',
  url: 'https://env.do/api',
  type: 'https://apis.do/code',
  endpoints: {
    listCategories: 'https://env.do/api',
    getCategory: 'https://env.do/:type',
  },
  site: 'https://env.do',
  login: 'https://env.do/login',
  signup: 'https://env.do/signup',
  subscribe: 'https://env.do/subscribe',
  repo: 'https://github.com/drivly/env.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://env.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
