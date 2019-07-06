import React, { useState } from 'react'
import userAPI from 'api/user.api'
import authUtil from 'utils/auth'

import { Button, FormGroup, Alert } from 'reactstrap'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const login = async () => {
    const { success, data } = await userAPI.login({
      username,
      password
    })
    if (success) {
      authUtil.saveToken(data.token)
      setError('')
      setSuccess(<div>Login success as <strong>{data.user.username}</strong></div>)
    } else {
      setError(JSON.stringify(data.message))
    }
  }

  return (
    <div>
      {error && (
        <Alert color='danger'>
          {error}
        </Alert>
      )}
      {success && (
        <Alert color='success'>
          {success}
        </Alert>
      )}
      <FormGroup>
        <input
          className='form-control'
          onChange={e => setUsername(e.target.value)}
          value={username}
          placeholder='Username'
        />
      </FormGroup>
      <FormGroup>
        <input
          className='form-control'
          onChange={e => setPassword(e.target.value)}
          value={password}
          placeholder='Password'
        />
      </FormGroup>
      <Button
        onClick={login}
        block
      >
        Login
      </Button>
    </div>
  )
}

export default LoginForm
