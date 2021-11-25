import {createStore} from 'redux';
import reducer from '../reducer/loginReducer';

function persistLogin(state) {
    localStorage.setItem('login', state);
  }
  function loadLogin(){
    const savedState = localStorage.getItem('login');
    return savedState ? JSON.parse(savedState) : false;
  }
  const store = createStore(reducer, loadLogin());
  store.subscribe(() => persistLogin(store.getState()));

  export default store;