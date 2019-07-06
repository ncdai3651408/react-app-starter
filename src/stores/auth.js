import { observable, action } from 'mobx'
import userAPI from 'api/user.api'

class AuthStore {
  @observable isAuthenticated = false
  @observable me = null
  @observable isFetchingMe = true

  @action
  async fetchMe () {
    this.isFetchingMe = true
    const { success, data } = await userAPI.fetchMe()
    if (success) {
      console.log(data)
      this.me = data
      this.isAuthenticated = true
    } else {
      this.isAuthenticated = false
      this.me = null
    }
    this.isFetchingMe = false
  }
}

export default AuthStore
