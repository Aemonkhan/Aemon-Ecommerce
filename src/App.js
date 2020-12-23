import React,{component} from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'

function App() {
  return (
<BrowserRouter>
<Route exact path ='/' component={Home}/>
</BrowserRouter>
  );
}

export default App;
