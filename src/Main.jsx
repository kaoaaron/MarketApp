import React, { Component } from "react";
import { Button } from "reactstrap";
import Modal from "./components/Modal/Modal";
import Add from "./components/Add/Add";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class Main extends Component {
  state = { items: [] };

  handleChange = (price, desc) => {
    this.setState({
      ...this.state,
      items: [
        this.state.items,
        <Button id="item" onClick={this.showModal} outline color="primary">
          <img className="img" src={require("./images/testpic.png")} />
          <br />
          <span className="price">${price}.00</span>
          <br />
          {desc}
        </Button>
      ]
    });
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
<<<<<<< HEAD
        <Add onSubmit={this.handleChange} />
        {this.state.items.map(child => child)}

        <input type="button" onClick={this.showModal} value="Show login" />

        <Login show={this.state.show}>
          <form className="login-form">
            <h2 className="text-center">Login</h2>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <button className="btn-lg btn-primary btn-block">Log in</button>
            <div className="text-center pt-3">
              Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3" />
            <div className="text-center">
              <a href="/sign-up">Sign up</a>
              <span className="p-2">|</span>
              <a href="/forgot-password">Forgot Password</a>
            </div>
          </form>
        </Login>

        <Signup />
        <Footer />
=======
        <div id="body">
          <Add onSubmit={this.handleChange} />
          {this.state.items.map(child => child)}
        </div>
>>>>>>> 50ac41463199dcaac1b490666f86ff21e1c86f66
      </React.Fragment>
    );
  }
}

export default Main;
