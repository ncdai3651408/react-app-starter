export const authTokenKey = '@reactAppStarter:authToken'

export const saveToken = (token) => {
  return localStorage.setItem(authTokenKey, token)
}

export const getToken = () => {
  return localStorage.getItem(authTokenKey)
}

const authUtil = {
  saveToken,
  getToken
}

export default authUtil
