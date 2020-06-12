import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'

function App(props) {
  return (
    <BrowserRouter>
   <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" href="#">IMG</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/user/login">Login <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/user/register">Register</Link>
      </li>
    </ul>
    
  </div>
</nav>
     <div className='container'>
      <Route path='/user/login' component={Login} />
      <Route path='/user/register' component = {Register}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

