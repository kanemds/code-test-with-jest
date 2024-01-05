import React, { useEffect, useState } from 'react'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [disableButton, setDisableButton] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (username && password) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [username, password])

  return (
    <div className='container'>
      <form className='loginForm'>
        <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button disabled={disableButton}>Login</button>
        <span
          data-testid='error'
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >something went wrong </span>
      </form>
    </div>
  )
}

export default Login