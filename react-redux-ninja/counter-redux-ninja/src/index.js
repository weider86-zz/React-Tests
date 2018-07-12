import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import {createStore} from  'redux';
import {rootReducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(rootReducer);
const target = document.querySelector('#root')

render(
    <div>
      <App />
    </div>,
    target
)

registerServiceWorker();
