const config = {
  REST_API_URL: process.env.REACT_APP_REST_API_URL
}

const c = (path) => {
  return config.REST_API_URL + path
}

export const getApi = () => {
  return {
    auth: c('/auth')
  }
}

export default config
