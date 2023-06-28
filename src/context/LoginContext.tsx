import { ReactNode, createContext } from 'react'
import { api } from 'src/services/api'
import Cookies from 'js-cookie'

interface LoginProviderProps {
  children: ReactNode
}

interface LoginFormInput {
  email: string
  password: string
}

interface LoginContextProps {
  login: (login: LoginFormInput) => Promise<void>
}

export const LoginContext = createContext<LoginContextProps>(
  {} as LoginContextProps,
)

export function LoginProvider({ children }: LoginProviderProps) {
  async function login(FormLoginData: LoginFormInput) {
    const response = await api.post('/auth/login', FormLoginData)
    const { token } = response.data

    Cookies.set('token', token)
  }

  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  )
}
