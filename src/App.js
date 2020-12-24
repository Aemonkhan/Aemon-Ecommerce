import React,{component} from 'react'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Home} from './components/Home'
import AddProducts from './components/AddProducts';

function App() {
  return (
<BrowserRouter>
<Route exact path ='/' component={Home}/>
<Route path ='/addproducts' component={AddProducts}/>
</BrowserRouter>
  );
}

export default App;
