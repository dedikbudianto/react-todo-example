import React from 'react';
import ReactDOM from 'react-dom';

import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const TodoApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
