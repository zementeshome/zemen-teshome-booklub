import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Klub from './components/Klub/Klub';
import About from './components/About/About';
import fire from './fire';

function App() {

  const [user, setUser] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');
  const [emailError, setEmailError] = useState ('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('')
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
    setFirstName('');
    setLastName('')
  }
 const history = useHistory();

  const handleLogin = () => {
    // console.log(fire.auth())
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // window.location.href = window.location.href.replace('3000/','3000/home');
        history.push('/home');
      })
      .catch((err) => {
        switch(err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        // console.log('successful login');
      window.location.href = window.location.href.replace('3000/','3000/form');
          // history.push('/form')
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
            // FIXME: error msg doesn't display, might also have to fix sign in error msg
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authorizeListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser('')
      }
    });
  };


  useEffect(() => {
    authorizeListener();
  }, []);

  return (
    <Router>
      <Switch>
       <Route exact path="/"><Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwwordError={passwordError} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}/></Route>
       <Route path="/home" component={Home}></Route>
       <Route path="/form" component={Form}></Route>
      <Route path="/klub" component={Klub}></Route>
      <Route path="/about" component={About}></Route>
      {/* {user ? (
        // <Form/>
        // <Home handleLogout={handleLogout}/>
      ) : (
      //   // <Form handleLogout={handleLogout}/>
      // )}
      // ) : (
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwwordError={passwordError} firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}/>
       )} */}
    </Switch>
    </Router>
  );
}

// define routes 

export default App;
