import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './Login.scss';
import fire from '../../fire';

function Login() {
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(fire.auth().currentUser)
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
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

  const handleSignUp = (e) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        console.log('successful login');
        fire.auth().currentUser.updateProfile({displayName: `${firstName}`}).then(() => {
          history.push('/form')
        })
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authorizeListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        clearInput();
      } else {
        setUser('')
      }
    });
  };

  useEffect(() => {
   authorizeListener();
  },[]);

    return (
        
        <div className="app">
            <section className="login">
                <div className="login__container">
                   <img className="login__logo"src={process.env.PUBLIC_URL + '/assets/logo1.svg'} alt="booklub logo"/>
                <div className="login__button-container">
                        {!hasAccount ? (
                          <form className="login__form-signIn">
                            <label className="login__label">username</label>
                               <input className="login__input" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                                <p className="login__email-error">{emailError}</p>
                                <label className="login__label">password</label>
                               <input className="login__input" type="password" required value={password}onChange={(e) => setPassword(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                                <p className="login__password-error">{passwordError}</p>
                          <div className="login__button-div">
                                <button className="login__button" onClick={handleLogin}>sign in</button>
                          </div>
                          <div className="login__signup-container">
                             <p className="login__sign-up">don't have an account?<span onClick={() => setHasAccount(!hasAccount)}>sign up</span></p>
                         </div>
                             </form>
                        ) : ( 
                            <form className="login__form-signUp">
                                 <label className="login__label">first name</label>
                                 <input className="login__input" type="text" autoFocus required value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                                 <label className="login__label">last name</label>
                                 <input className="login__input" type="text" autoFocus required value={lastName} onChange={(e) => setLastName(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                                 <label className="login__label-2">username (email)</label>
                                 <input className="login__input" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                                 <p className="login__email-error">{emailError}</p>
                                <label className="login__label">password</label>
                                <input className="login__input" type="password" required value={password}onChange={(e) => setPassword(e.target.value)} style={{fontFamily: 'Roboto', fontSize: '14px'}}></input>
                                <p className="login__password-error">{passwordError}</p>
                             <div className="login__button-div">
                                <button className="login__button" onClick={handleSignUp}>sign up</button>
                            </div>
                            <div className="login__signup-container">
                                <p className="login__sign-in">have an account?<span onClick={() => setHasAccount(!hasAccount)}>sign in</span></p>
                            </div>
                        </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
      )
    }

export default Login;

