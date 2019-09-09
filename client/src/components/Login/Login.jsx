import React, { Component } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../App.css";

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: 50,
  bottom: 0
};

const loginStyle = {
  backgroundColor: "#fff",
  borderRadius: 5,
  width: 500,
  height: 500,
  margin: "0 auto",
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

const closeStyle = {
  position: "relative",
  bottom: 419,
  left: 400
};

class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div style={backdropStyle}>
        <div style={loginStyle}>
          <Tabs>
            <TabList>
              <Tab>Sign-In</Tab>
              <Tab>Register</Tab>
            </TabList>

            <TabPanel>
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
              </form>
            </TabPanel>

            <TabPanel>
              <form className="login-form">
                <h2 className="text-center">Register</h2>

                <FormGroup>
                  <Label>User name</Label>
                  <Input type="User name" placeholder="User name" />
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input type="password" placeholder="Password" />
                </FormGroup>
                <button className="btn-lg btn-primary btn-block">
                  Register
                </button>
              </form>
            </TabPanel>
          </Tabs>

          {this.props.children}
          <div style={footerStyle}>
            <div style={closeStyle}>
              <div
                className="close"
                onClick={e => {
                  this.onClose(e);
                }}
              >
                <span>
                  <i className="fas fa-times"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
