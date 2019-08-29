import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
