import { GlobalStyle } from './assets/styles/global'
import { ListProvider } from './context/ListContext'
import { LoginProvider } from './context/LoginContext'

import Routes from './routes'

export function App() {
  return (
    <ListProvider>
      <LoginProvider>
        <Routes />

        <GlobalStyle />
      </LoginProvider>
    </ListProvider>
  )
}
