import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from 'react-redux';
import {createStore} from 'redux';


const store = createStore(reducer, middleware)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

