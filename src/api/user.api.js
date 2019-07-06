import { getApi } from 'config'
import axios from 'utils/axios'

const c = (path) => {
  return getApi().auth + path
}

const userAPI = {
  fetchMe: () => axios.get(c('/me')),
  login: ({ username, password }) => axios.post(c('/login'), {
    username,
    password
  })
}

export default userAPI
