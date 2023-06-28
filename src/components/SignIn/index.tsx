import { FormEvent, useContext, useEffect, useState } from 'react'
import { Content, Routes } from './styles'
import { Link, useHistory } from 'react-router-dom'
// import axios from 'axios'
// import Cookies from 'js-cookie'
import { isAuthenticated } from 'src/auth'
import { LoginContext } from 'src/context/LoginContext'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useContext(LoginContext)

  const history = useHistory()

  useEffect(() => {
    if (isAuthenticated()) {
      history.push('/list')
    }
  }, [history])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)

    const FormLoginData = {
      email,
      password,
    }

    try {
      await login(FormLoginData)

      history.push('/list')
    } catch (error: any) {
      console.log(error.response?.data.msg)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Content onSubmit={handleSubmit}>
        <h1>Sign In</h1>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="button" type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Entrar'}
        </button>
        <Routes>
          <Link to="/signup"> Create a new account </Link>
        </Routes>
      </Content>
    </>
  )
}
