import React, { Component } from "react";
import Login from "../Login/Login";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class NavBar extends Component {
  state = {
    show: false
  };

  showLogin = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  showSignup = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand text-white text-uppercase" href="#">
          MarketApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white text-uppercase ml-3" href="#">
                Product<span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="button"
              onClick={this.showLogin}
              value="Show Login"
            >
              Login
            </button>
          </form>
        </div>

        <Login onClose={this.showLogin} show={this.state.show}>
          <form className="login-form">
            <h2 className="text-center">Login</h2>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="password" />
            </FormGroup>
            <button className="btn-lg btn-primary btn-block">Log in</button>
            <div className="text-center pt-3">
              Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3" />
            <div className="text-center">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={this.showSignup}
                value="Show Signup"
              >
                Sign Up
              </button>
              <span className="p-2">|</span>
              <button type="button" className="btn btn-outline-primary btn-sm">
                Forgot Password
              </button>
            </div>
          </form>
        </Login>
      </nav>
    );
  }
}

export default NavBar;
