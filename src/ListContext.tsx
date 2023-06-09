// import { createContext, ReactNode, useEffect, useState } from 'react';
// import { api } from './services/api';

import { createContext } from "react";

// export interface List {
//   id: number;
//   identifier: string;
//   password: string;
// }
//  type ListInput = Omit<List, 'id'>//cria uma nova tipagem com as mesmas props mas omite o id

// interface ListProviderProps {
//   children: ReactNode;
// }

// interface ListContextData {
//   lists: List[];
//   createList: (list: ListInput) => Promise<void>;
// }

// export const ListContext = createContext<ListContextData>(
//   {} as ListContextData //como não tem o formato que passamos na tipagem, precisamos forçar com as
// );

// export function ListProvider({ children }: ListProviderProps) {
//   const [lists, setLists] = useState<List[]>([]);

//     useEffect(() => {
//         api.get('/list')
//             .then(response => setLists(response.data.lists))
//     }, []);

//     async function createList(listInput: ListInput) {
//       const response = await api.post('/list', listInput)
//       const { list } = response.data;


//       //seguindo o conceito de imutabilidade, utilizamos o setLists para adicionar um novo valor para lists, passando todas as lists que já existiam e adicionando a nova.
//       setLists([
//         ...lists,
//         list,
//       ]);
//     }

//     return (
//       <ListContext.Provider value={{ lists, createList}}>
//         {children}
//       </ListContext.Provider>
//     )
// }

export const ListContext = createContext({})