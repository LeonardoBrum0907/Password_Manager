import jwtDecode from 'jwt-decode'
import Cookies from 'js-cookie'

export interface JwtPayload {
  id: string
  iat: number
  exp: number
}

export const isAuthenticated = () => {
  const token = Cookies.get('token')

  if (token) {
    try {
      const decodedToken: JwtPayload = jwtDecode(token)
      const currentTime = Date.now() / 1000

      if (decodedToken.exp && decodedToken.exp > currentTime) {
        return true
      } else {
        Cookies.remove('token')
        return false
      }
    } catch (error) {
      console.log('Erro ao decodificar o token:', error)
      return false
    }
  }

  return false
}
