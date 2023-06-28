import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import Cookies from 'js-cookie'
import { JwtPayload } from 'src/auth'
import jwtDecode from 'jwt-decode'

export interface List {
  _id: string
  identifier: string
  password: string
}

interface ListInput {
  id: string
  identifier: string
  password: string
}

interface ListProviderProps {
  children: ReactNode
}

interface ListContextData {
  lists: List[]
  createList: (list: ListInput) => Promise<void>
}

export const ListContext = createContext<ListContextData>(
  {} as ListContextData, // como não tem o formato que passamos na tipagem, precisamos forçar com as
)

export function ListProvider({ children }: ListProviderProps) {
  const [lists, setLists] = useState<List[]>([])
  const token = Cookies.get('token')

  useEffect(() => {
    if (token) {
      const decodedToken: JwtPayload = jwtDecode(token)
      api
        .get(`/user/list/${decodedToken.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setLists(response.data.user.passwordList))
    }
  }, [token])
  console.log(lists)

  async function createList(listInput: ListInput) {
    try {
      const response = await api.post(`/user/list/${listInput.id}`, listInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const { list } = response.data

      console.log(response.data)
      // seguindo o conceito de imutabilidade, utilizamos o setLists para adicionar um novo valor para lists, passando todas as lists que já existiam e adicionando a nova.
      setLists([...lists, list])
    } catch (error: any) {
      console.log(error.response.data.msg)
    }
  }

  return (
    <ListContext.Provider value={{ lists, createList }}>
      {children}
    </ListContext.Provider>
  )
}
