import React from 'react';
//import GlobalStyle from './styles/global'

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import AppProvider from './hooks';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <AppProvider>
          <Routes />
      </AppProvider>
    </Router>
  </ChakraProvider>
);

export default App;
