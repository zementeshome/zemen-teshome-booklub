import React from 'react'

function Login() {
    return (
        <div>
            <section className="login">
            <img src={process.env.PUBLIC_URL + '/assets/logo2.svg'} alt="booklub logo"/>
                <div className="login__container">
                    <label className="login__label">username</label>
                    <input className="login__input" type="text"></input>
                    <p className="login__error"></p>
                    <label className="login__label">password</label>
                    <input className="login__input" type="password"></input>
                    <p className="login__error"></p>
                    <div className="login__button-container">
                        <button ClassName="login__button">sign in</button>
                        <p className="login__sign-up">don't have an account? <span>sign up</span></p>
                        <button ClassName="login__button">sign up</button>
                        <p className="login__sign-in">have an account? <span>sign in</span></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;

