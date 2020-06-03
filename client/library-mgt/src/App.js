import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './components/login'

function App() {
  return (
    <BrowserRouter>
     <div>
      <Route path='/login' component={Login} />
    </div>
    </BrowserRouter>
  );
}

export default App;
