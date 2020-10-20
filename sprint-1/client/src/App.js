import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Klub from './components/Klub/Klub';
import About from './components/About/About';
import './App.css';

function App() {

  return (
    <div className="App">
    <Router>
      <Switch>
       <Route exact path="/"><Login /></Route>
       <Route path="/home" component={Home}></Route>
       <Route path="/form" component={Form}></Route>
      <Route path="/klub" component={Klub}></Route>
      <Route path="/about" component={About}></Route>
    </Switch>
    </Router>
    </div>
  );
}

// define routes 

export default App;
