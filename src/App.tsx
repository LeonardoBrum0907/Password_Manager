import { GlobalStyle } from './assets/styles/global';
import { ListProvider } from './ListContext';

import Routes from './routes';

export function App() {
  return (

    <ListProvider>
      <Routes />  
              
      <GlobalStyle />
    </ListProvider>
  );
} 