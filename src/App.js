import React from 'react'
import
  { 
    BrowserRouter as Router, 
    Route, 
    Link 
  } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contatos from './pages/Contatos'
import Navigation from './Components/Navigation'
export default class App extends React.Component{
  render(){
    return(
        <Router>
          <Navigation/>
          
          <Route path="/" exact component={Home}/>
          <Route path="/sobre" component={About}/>
          <Route path="/contatos" component={Contatos}/>
        </Router>
    )
  }
}