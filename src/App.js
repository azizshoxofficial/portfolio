import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './router/Home/Home'
import About from './router/About/About'
import Navbar from './components/navbar/Navbar'
import Contact from './router/Contact/Contact'
import Russian from './router/RUSSIAN/Russian'


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={Contact}/>
          <Route path="/Russian" component={Russian}/>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App