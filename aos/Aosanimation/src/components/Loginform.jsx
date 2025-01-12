import React from 'react'
import './style/Loginform.css'

const Loginform = () => {
  return (
    <>
    <div className="login_form" >
    <form action="#">
      <h3>Log in with</h3>
      <div className="login_option">
        <div className="option">
          <a href="#">
            <img src="logos/google.png" alt="Google" />
            <span>Google</span>
          </a>
        </div>
        <div className="option">
          <a href="#">
            <img src="logos/apple.png" alt="Apple" />
            <span>Apple</span>
          </a>
        </div>
      </div>
      <p className="separator">
        <span>or</span>
      </p>
      <div className="input_box">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter email address" required />
      </div>
      <div className="input_box">
        <div className="password_title">
          <label forhtml="password">Password</label>
          <a href="#">Forgot Password?</a>
        </div>
        <input type="password" id="password" placeholder="Enter your password" required />
      </div>
      <button type="submit">Log In</button>
      <p className="sign_up">Don't have an account? <a href="#">Sign up</a></p>
    </form>
  </div>
      
    </>
  )
}

export default Loginform
