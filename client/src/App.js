import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Klub from './components/Klub/Klub';
import Chat from './components/Chat/Chat';
import About from './components/About/About';
import Forum from './components/Forum/Forum';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
       <Route exact path="/" component={Login}></Route>
       <Route path="/home" component={Home}></Route>
       <Route path="/form" component={Form}></Route>
       <Route path="/klub" component={Klub}></Route>
       <Route path="/chat" component={Chat}></Route>
       <Route path="/about" component={About}></Route>
       <Route path="/forum" component={Forum}></Route>
    </Switch>
    </Router>
    </div>
  );
}
export default App;
