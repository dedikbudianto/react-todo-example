import React from 'react';
import ReactDOM from 'react-dom';

import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import adding from './redux/reducer/adding';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(adding);

console.log(store.getState());

const TodoApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
