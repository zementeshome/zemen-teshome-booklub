import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Klub from './components/Klub/Klub';
import About from './components/About/About';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import './App.css';

function App() {

  const [user, setUser] = useState('');

  return (
    <div className="App">
    <Router>
      <Switch>
       <Route exact path="/" component={Login}></Route>
       <Route path="/home"><Home user={user}/></Route>
       <Route path="/form" component={Form}></Route>
       <Route path="/klub" component={Klub}></Route>
       <Route path="/join" component={Join}></Route>
       <Route path="/chat" component={Chat}></Route>
       <Route path="/about" component={About}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
