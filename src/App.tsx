import { BrowserRouter as Router } from 'react-router-dom';
import { OrderProvider } from './hooks/useOrder';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <OrderProvider>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </OrderProvider>
);

export default App;
