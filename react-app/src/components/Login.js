import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState({})
  const [disableButton, setDisableButton] = useState(true)
  const [error, setError] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (username && password) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [username, password])


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      setUser(data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className='container'>
      <p>{user ? user.name : ''}</p>
      <form className='loginForm'>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={disableButton} onClick={handleLogin}>{loading ? 'loading...' : 'Login'}</button>
        <span
          data-testid='error'
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >something went wrong </span>
      </form>
    </div>
  )
}

export default Login