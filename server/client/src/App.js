import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
//react-router-dom é um pacote que permite que o usuário navegue entre as páginas do site.
//O pacote é importado como Router, Routes e Route.

import React from 'react';
import {Provider} from 'react-redux';
import MainRoutes from './routes/Routes';
import store from './store/Store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <MainRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
