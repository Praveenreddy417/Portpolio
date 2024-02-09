import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import store from './views/store';

function App() {
  const routing = useRoutes(routes);
  return (
    <Provider store={store}>
       {routing}
      </Provider>  
  );
}

export default App;
