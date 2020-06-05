import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <BrowserRouter>
     <div className='container'>
      <Route path='/login' component={Login} />
      <Route path='/register' component = {Register}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
