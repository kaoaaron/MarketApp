import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const backdropStyle = {
  position: "fixed",
  top: 0,
  button: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: 50
};

const loginStlye = {
  backgroundColor: "#fff",
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: "0 auto",
  padding: 30,
  position: "relative"
};

const footerStyle = {
  position: "absolute",
  bottom: 20
};

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  render() {
    return (
      <form className="Signup-form">
        <h2 className="text-center">Sign Up</h2>
        <FormGroup>
          <Label>First Name</Label>
          <Input type="firstname" placeholder="Firstname" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input type="lastname" placeholder="Lastname" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <button className="btn-lg btn-primary btn-block">Sign Up</button>
      </form>
    );
  }
}

export default Signup;
