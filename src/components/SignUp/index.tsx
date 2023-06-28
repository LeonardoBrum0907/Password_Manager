import { Link, useHistory } from 'react-router-dom'
import { Content, Routes } from './styles'
import { FormEvent, useContext, useState } from 'react'
import axios from 'axios'
import { LoginContext } from 'src/context/LoginContext'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formDataError, setFormDataError] = useState('')
  const [formDataSuccess, setFormDataSuccess] = useState('')

  const { login } = useContext(LoginContext)

  const history = useHistory()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setIsLoading(true)
    setFormDataError('')
    setFormDataSuccess('')

    const FormRegisterData = {
      name,
      email,
      password,
      confirmPassword,
    }

    try {
      const response = await axios.post(
        'http://localhost:5555/auth/register',
        FormRegisterData,
      )
      setFormDataSuccess(response.data.msg)
      try {
        await login({ email, password })
        history.push('/list')
      } catch (error: any) {
        console.log(error.response.data.msg)
      }
    } catch (error: any) {
      setFormDataError(error.response.data.msg)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Content onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm-password">Confirmar Senha:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          pattern={password}
        />

        {formDataError && <span className="error">{formDataError}</span>}
        {formDataSuccess && <span className="success">{formDataSuccess}</span>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Enviar'}
        </button>
        <Routes>
          <Link to="/"> I already have an account </Link>
        </Routes>
      </Content>
    </>
  )
}
