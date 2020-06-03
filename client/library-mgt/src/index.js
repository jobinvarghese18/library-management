import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './ConfigureStore/configureStore'

const store = configureStore()
const jsx = <Provider store = {store}>
  <App/>
</Provider>
ReactDOM.render(jsx,document.getElementById('root'))
